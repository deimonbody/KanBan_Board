import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { issuesReducer } from "./issues";
import { columnsReducer } from "./columns";

export const reducer = combineReducers({ issuesReducer, columnsReducer });
export const store = configureStore({
  reducer,
});
