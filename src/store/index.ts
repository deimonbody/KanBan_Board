import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { issuesReducer } from "./issues";

export const reducer = combineReducers({ issuesReducer });
export const store = configureStore({
  reducer,
});
