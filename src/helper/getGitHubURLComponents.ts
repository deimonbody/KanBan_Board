import { IGitHubURLComponents } from "@src/common/interface";

export const getGitHubURLComponents = (url: string): IGitHubURLComponents => {
  const [, , , owner, repo] = url.split("/");
  return {
    owner,
    repo,
  };
};
