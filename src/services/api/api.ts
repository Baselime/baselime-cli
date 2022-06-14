import auth from "./paths/auth";
import queries from "./paths/queries";
import alerts from "./paths/alerts";
import deployments from "./paths/deployments";
import queryRuns from "./paths/query-runs";
import applications from "./paths/applications";
import namespaces from "./paths/namespaces";
import events from "./paths/events";
import cli from "./paths/cli";
import iam from "./paths/iam";
import environments from "./paths/environments";

export default {
  ...auth,
  ...queries,
  ...alerts,
  ...deployments,
  ...queryRuns,
  ...applications,
  ...namespaces,
  ...events,
  ...cli,
  ...iam,
  ...environments,
};
