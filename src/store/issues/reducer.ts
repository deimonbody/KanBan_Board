import { ActionReducerMapBuilder, isAnyOf } from "@reduxjs/toolkit";
import { IState } from "./common";
import { getIssues } from "./actions";

export const issuesReducer = (builder: ActionReducerMapBuilder<IState>) => {
  builder
    .addCase(getIssues.fulfilled, (state, actions) => {
      state.issues = actions.payload.result;
      state.gitHubURLComponents = actions.payload.urlComponents;
      state.countOfStars = actions.payload.countsOfStars;
    })
    .addCase(getIssues.pending, (state) => {
      state.isLoading = true;
    })
    .addMatcher(isAnyOf(getIssues.fulfilled, getIssues.rejected), (state) => {
      state.isLoading = false;
    });
};
