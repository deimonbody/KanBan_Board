import { IGitHubURLComponents, IIssues } from "@src/common/interface";

export interface IState {
  isLoading: boolean;
  issues: IIssues | null;
  gitHubURLComponents: IGitHubURLComponents | null;
  countOfStars: number | null;
}

export enum IssuesActions {
  GET_ISSUES = "GET_ISSUES",
}
