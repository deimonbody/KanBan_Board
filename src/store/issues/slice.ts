import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./common";
import { issuesReducer } from "./reducer";

const initialState: IState = {
  isLoading: false,
  issues: null,
  gitHubURLComponents: null,
  countOfStars: null,
};

const { reducer } = createSlice({
  name: "issues-reducer",
  initialState,
  reducers: {},
  extraReducers: issuesReducer,
});

export { reducer };
