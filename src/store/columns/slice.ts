import { createSlice } from "@reduxjs/toolkit";
import { ColumnStatus } from "@src/common/interface";
import { IState } from "./common";
import { columnsReducer } from "./reducer";

const initialState: IState = {
  columns: [
    {
      id: 1,
      title: "To DO (All)",
      issues: [],
      status: ColumnStatus.TO_DO,
    },
    {
      id: 2,
      title: "In Progress",
      issues: [],
      status: ColumnStatus.IN_PROGRESS,
    },
    {
      id: 3,
      title: "Done",
      issues: [],
      status: ColumnStatus.DONE,
    },
  ],
};

const { reducer } = createSlice({
  name: "columns-reducer",
  initialState,
  reducers: {},
  extraReducers: columnsReducer,
});

export { reducer };
