import { publicAxiosInstance } from "../clients";

export interface Workspace {
  id: string;
  name: string;
  environments: Environment[];
  subscription: {
    tier: number;
    start: number;
    isActive: boolean;
  };
  updated: string;
  created: string;
}

export interface Environment {
  alias: string;
  id: string;
  region: string;
  account: string;
}

async function generateOneTimePassword(email: string) {
  await publicAxiosInstance.post("/auth/otp", { email });
}

async function getWorkspacesByOneTimePassword(
  otp: string,
): Promise<Workspace[]> {
  const { workspaces } = (
    await publicAxiosInstance.get("/auth/workspaces", { params: { otp } })
  ).data;
  return workspaces;
}

async function getApiKey(
  workspaceId: string,
  environmentId: string,
  otp: string,
): Promise<string> {
  const { apiKey } = (
    await publicAxiosInstance.get("/auth/api-key", {
      params: { otp, environmentId, workspaceId },
    })
  ).data;
  return apiKey;
}

export default {
  generateOneTimePassword,
  getWorkspacesByOneTimePassword,
  getApiKey,
};
