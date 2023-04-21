import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IState } from "./common";
import { getIssues } from "../issues/actions";
import { setColumns } from "./actions";

export const columnsReducer = (builder: ActionReducerMapBuilder<IState>) => {
  builder
    .addCase(getIssues.fulfilled, (state, actions) => {
      const issues = actions.payload.result;
      const newColumns = [...state.columns];
      newColumns[0].issues = issues.all;
      newColumns[1].issues = issues.opened;
      newColumns[2].issues = issues.closed;
      state.columns = newColumns;
    })
    .addCase(setColumns, (state, actions) => {
      state.columns = actions.payload;
    });
};
