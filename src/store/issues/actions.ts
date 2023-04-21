import { createAsyncThunk } from "@reduxjs/toolkit";
import { RepoService } from "@src/services/repo.service";
import { IGitHubURLComponents, IIssues } from "@src/common/interface";
import { getFilteredIssues } from "@src/helper/getFilteredIssues";
import { getLoaclStorageRepoIssues } from "@src/helper/getLocalStorageRepoIssues";
import { setItem } from "@src/helper/localStorage.helper";
import { getConcatIssues } from "@src/helper/getConcatIssues";
import { IssuesActions } from "./common";

export const getIssues = createAsyncThunk(
  IssuesActions.GET_ISSUES,
  async (urlComponents: IGitHubURLComponents) => {
    const countsOfStars = await RepoService.getCountOfStars(urlComponents);
    const allIsuesFromLS = getLoaclStorageRepoIssues(urlComponents);
    const issuesFromServer = getFilteredIssues(
      await RepoService.getAllIssues(urlComponents),
    );

    let result: IIssues;

    if (allIsuesFromLS) {
      // if we already have issues from local storage - get them and concat with issues from server;
      result = getConcatIssues(allIsuesFromLS, issuesFromServer);
    } else {
      // if we dont have any issues from local storage - get them from server;
      result = issuesFromServer;
    }

    setItem(`${urlComponents.owner}/${urlComponents.repo}`, result);
    return { result, urlComponents, countsOfStars };
  },
);
