import { IColumn } from "@src/common/interface";

export interface IState {
  columns: IColumn[];
}

export enum ColumnsActions {
  SET_COLUMNS = "SET_COLUMNS",
}
