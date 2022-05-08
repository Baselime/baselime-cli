import Table from "cli-table3";

import { tableChars } from "../../../shared";
import chalk from "chalk";
import { Alert } from "../../../services/api/paths/alerts";

function list(alerts: Alert[], json: boolean) {
  if (json) {
    console.log(JSON.stringify({ alerts }, null, 4));
    return;
  }
  const table = new Table({
    chars: tableChars,
    head: ["id", "application", "ref", "Name", "Created"].map((e) => `${chalk.bold(chalk.cyan(e))}`),
  });
  alerts.forEach((alert) => {
    table.push([alert.id, alert.application, alert.ref, alert.name, alert.created]);
  });
  console.log(`${table.toString()}`);
  console.log(`✨ ${chalk.bold(chalk.cyan(`${alerts.length} alerts`))}`);
}

export default {
  list,
};
