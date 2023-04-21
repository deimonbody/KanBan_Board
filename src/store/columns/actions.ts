import { createAction } from "@reduxjs/toolkit";
import { IColumn, IGitHubURLComponents } from "@src/common/interface";
import { getFilteredIssues } from "@src/helper/getFilteredIssues";
import { setItem } from "@src/helper/localStorage.helper";
import { ColumnsActions } from "./common";

export const setColumns = createAction(
  ColumnsActions.SET_COLUMNS,
  (newColumns: IColumn[], urlComponents: IGitHubURLComponents) => {
    const allIssues = newColumns.map((column) => column.issues); // get all new issues from every column

    const newIssues = getFilteredIssues(
      // concat every issues array
      allIssues.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? curr : [curr]);
      }, []),
    );

    setItem(`${urlComponents.owner}/${urlComponents.repo}`, newIssues);

    return { payload: newColumns };
  },
);
