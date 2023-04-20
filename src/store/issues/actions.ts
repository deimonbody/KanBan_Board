import { createAsyncThunk } from "@reduxjs/toolkit";
import { RepoService } from "@src/services/repo.service";
import { IGitHubURLComponents } from "@src/common/interface";
import { getFilteredIssues } from "@src/config/getFilteredIssues";
import { IssuesActions } from "./common";

export const getIssues = createAsyncThunk(
  IssuesActions.GET_ISSUES,
  async (urlComponents: IGitHubURLComponents) => {
    const allIssues = await RepoService.getAllIssues(urlComponents);
    const countsOfStars = await RepoService.getCountOfStars(urlComponents);
    const result = getFilteredIssues(allIssues);
    return { result, urlComponents, countsOfStars };
  },
);
