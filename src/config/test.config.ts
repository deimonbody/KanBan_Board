import { ColumnStatus } from "@src/common/interface";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const stateWithoutUrlComponent = {
  issuesReducer: {
    isLoading: false,
    issues: null,
    gitHubURLComponents: null,
    countOfStars: 0,
  },
};

const stateWithUrlComponent = {
  issuesReducer: {
    isLoading: false,
    issues: null,
    gitHubURLComponents: {
      owner: "deimonbody",
      repo: "univer-test",
    },
    countOfStars: 10,
  },
};

const stateWithColumns = {
  columnsReducer: {
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
        issues: [
          {
            id: 1678498483,
            title: "Third is",
            comments: 0,
            state: "open",
            userName: "deimonbody",
          },
        ],
        status: ColumnStatus.IN_PROGRESS,
      },
      {
        id: 3,
        title: "Done",
        issues: [
          {
            id: 1674799713,
            title: "Second is",
            comments: 0,
            state: "closed",
            userName: "deimonbody",
          },
        ],
        status: ColumnStatus.DONE,
      },
    ],
  },
};

const stateWithIssueLoader = {
  issuesReducer: {
    isLoading: true,
    issues: null,
    gitHubURLComponents: null,
    countOfStars: 0,
  },
};

const stateWithIssues = {
  issuesReducer: {
    isLoading: false,
    issues: [],
    gitHubURLComponents: {
      owner: "deimonbody",
      repo: "univer-test",
    },
    countOfStars: 10,
  },
};

const stateWithData = {
  ...stateWithColumns,
  ...stateWithIssues,
};

export const storeWithUrlComponents = mockStore(stateWithUrlComponent);
export const storeWithoutUrlComponents = mockStore(stateWithoutUrlComponent);
export const storeWithColumns = mockStore(stateWithColumns);
export const storeWithData = mockStore(stateWithData);
export const storeWithIssuesLoader = mockStore(stateWithIssueLoader);
