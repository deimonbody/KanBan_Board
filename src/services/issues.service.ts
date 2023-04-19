import { octokit } from "@src/config/github.config";

export class IssuesService {
  static async getAllOpenedIssues() {
    const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "facebook",
      repo: "react",
    });
    console.log("Opened:", result.data);
  }

  static async getAllClosedIssues() {
    const result = await octokit.request(
      "GET /repos/{owner}/{repo}/issues?state=all",
      {
        owner: "deimonbody",
        repo: "univer-test",
      },
    );
    console.log("Closed:", result.data);
  }
}
