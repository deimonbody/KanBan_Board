import { RootState } from "../types";

export const selectColumns = (state: RootState) => state.columnsReducer.columns;
