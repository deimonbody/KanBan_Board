import {
  IGitHubURLComponents,
  IIssueFromGitHub,
  IIssueResult,
} from "@src/common/interface";
import { octokit } from "@src/config/github.config";

export class RepoService {
  static async getAllIssues({
    owner,
    repo,
  }: IGitHubURLComponents): Promise<IIssueResult[]> {
    const result = await octokit.request(
      "GET /repos/{owner}/{repo}/issues?state=all",
      {
        owner,
        repo,
      },
    );

    const allIssues: IIssueResult[] = result.data.map(
      (el: IIssueFromGitHub) => ({
        id: el.id,
        title: el.title,
        comments: el.comments,
        state: el.state,
        userName: el.user.login,
      }),
    );

    return allIssues;
  }

  static async getCountOfStars({
    owner,
    repo,
  }: IGitHubURLComponents): Promise<number> {
    const result = await octokit.request("GET /repos/{owner}/{repo}", {
      repo,
      owner,
    });
    return result.data.stargazers_count;
  }
}
