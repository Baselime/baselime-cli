import { writeFileSync } from "fs";
const packageJson = require("../../../package.json");
import { readdir } from "fs/promises";
import path from "path";
import { promptTemplateVariables } from "../../commands/applications/handlers/prompts";
import { DeploymentApplication } from "../../commands/apply/handlers/checks";
import { parseTemplateName } from "../../utils";
import api from "../api/api";
import { Ref, stringify, stringifyResources } from "../parser/parser";
import spinner from "../spinner";

export async function init(
  folder: string,
  application: string,
  description: string,
  templateUrl: string,
  email: string,
) {
  const s = spinner.get();
  const metadata: DeploymentApplication = {
    version: packageJson.version,
    application,
    description: description || undefined,
    provider: "aws",
  };

  const d = stringify(metadata);
  writeFileSync(`${folder}/index.yml`, d);


  if (templateUrl) {
    

    const { workspaceId, template: templateName } = parseTemplateName(templateUrl);

    const template = await api.templateGet(workspaceId, templateName, true);

    const { resources, variables } = template;

    let data = stringifyResources(resources);

    if (variables.length) {
      const vars: Record<string, any> = await promptTemplateVariables(variables);

      variables.forEach(variable => {
        const { ref } = variable;
        const value = vars[ref] || variable.default;
        if (!value) {
          s.fail(`Please provide a value for all variables: ${variable.ref} is missing and doesn't have a default value`);
          return;
        }
        data = data.split(`<var>${ref}</var>`).join(value);
      })
    }

    writeFileSync(`${folder}/${application}.yml`, data);
    return;
  }

  const data = {
    "lambda-cold-start-durations": {
      type: "query",
      properties: {
        name: "Duration of lambda cold-starts",
        description: "How long do cold starts take on our API?",
        parameters: {
          dataset: "logs",
          calculations: [
            "MAX(@initDuration)",
            "MIN(@initDuration)",
            "AVG(@initDuration)",
            "P99(@initDuration)",
            "COUNT"
          ],
          filters: [
            "@type := REPORT"
          ],
          filterCombination: "AND",
        }
      }
    },
    "critical-cold-start-duration": {
      type: "alert",
      properties: {
        name: "Lambda cold-starts take more than 2 seconds",
        parameters: {
          query: new Ref("lambda-cold-start-durations"),
          frequency: 30,
          duration: 30,
          threshold: ":> 2000",
        },
        channels: [new Ref("developers")]
      }
    },
    developers: {
      type: "channel",
      properties: {
        type: "email",
        targets: [
          email
        ]
      }
    }
  };

  const dd = stringify(data);
  writeFileSync(`${folder}/${application}.yml`, dd);
}

export async function getFileList(dirName: string, extensions: string[]) {
  let files: string[] = [];
  const items = await readdir(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [
        ...files,
        ...(await getFileList(`${dirName}/${item.name}`, extensions)),
      ];
    } else if (item.isFile()) {
      if (!extensions.includes(path.extname(item.name))) {
        continue;
      }
      files.push(`${dirName}/${item.name}`);
    }
  }

  return files;
};
