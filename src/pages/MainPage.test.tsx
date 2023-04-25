import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  storeWithIssuesLoader,
  storeWithoutUrlComponents,
  storeWithData,
} from "@src/config/test.config";
import MainPage from "./MainPage";

describe(MainPage, () => {
  it("when it`s loading the issues - show loader and hide main part", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithIssuesLoader}>
        <MainPage />
      </Provider>,
    );
    const loader = queryByTestId("loaderComponent");
    const mainPart = queryByTestId("mainPageContent");

    expect(loader).toBeInTheDocument();
    expect(mainPart).not.toBeInTheDocument();
  });
  it("when it`s not loading the issues - show main part and hide loading", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithoutUrlComponents}>
        <MainPage />
      </Provider>,
    );
    const loader = queryByTestId("loaderComponent");
    const mainPart = queryByTestId("mainPageContent");

    expect(mainPart).toBeInTheDocument();
    expect(loader).not.toBeInTheDocument();
  });
  it("when there are no issues - show: nothing was found component; and hide: issues block component", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithoutUrlComponents}>
        <MainPage />
      </Provider>,
    );
    const nothingWasFound = queryByTestId("nothingComponent");
    const issuesBlock = queryByTestId("mainPageIssuesBlock");

    expect(nothingWasFound).toBeInTheDocument();
    expect(issuesBlock).not.toBeInTheDocument();
  });
  it("when there are some issues - show: issues block component; and hide: nothing was found component", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithData}>
        <MainPage />
      </Provider>,
    );
    const nothingWasFound = queryByTestId("nothingComponent");
    const issuesBlock = queryByTestId("mainPageIssuesBlock");

    expect(issuesBlock).toBeInTheDocument();
    expect(nothingWasFound).not.toBeInTheDocument();
  });
});
