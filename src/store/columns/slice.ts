import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./common";
import { columnsReducer } from "./reducer";

const initialState: IState = {
  columns: [
    {
      id: 1,
      title: "To DO (All)",
      issues: [],
    },
    {
      id: 2,
      title: "In Progress",
      issues: [],
    },
    {
      id: 3,
      title: "Done",
      issues: [],
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
