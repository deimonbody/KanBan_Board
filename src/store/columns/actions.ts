import { createAction } from "@reduxjs/toolkit";
import { IColumn } from "@src/common/interface";
import { ColumnsActions } from "./common";

export const setColumns = createAction(
  ColumnsActions.SET_COLUMNS,
  (newColumns: IColumn[]) => ({ payload: newColumns }),
);
