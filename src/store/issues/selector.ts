import { RootState } from "../types";

export const selectIssues = (state: RootState) => state.issuesReducer.issues;
export const selectIssuesLoading = (state: RootState) =>
  state.issuesReducer.isLoading;
export const selectGitHubURLComponents = (state: RootState) =>
  state.issuesReducer.gitHubURLComponents;
export const selectCountOfStars = (state: RootState) =>
  state.issuesReducer.countOfStars;
