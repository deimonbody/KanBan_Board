import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import {
  storeWithUrlComponents,
  storeWithoutUrlComponents,
} from "@src/config/test.config";
import BreadCrumbBlock from "./BreadCrumbBlock";

describe(BreadCrumbBlock, () => {
  it("There is must be empty block when dosn`t have gitHubURLComponents var and there is no main component", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithoutUrlComponents}>
        <BreadCrumbBlock />
      </Provider>,
    );
    const noUrlBlock = queryByTestId("NoURL");
    const mainComponent = queryByTestId("mainComponent");

    expect(noUrlBlock).toBeInTheDocument();
    expect(mainComponent).toBeNull();
  });

  it("There is must be main component when has gitHubURLComponents var and there is no empty block", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <BreadCrumbBlock />
      </Provider>,
    );
    const mainComponent = queryByTestId("mainComponent");
    const noUrlBlock = queryByTestId("NoURL");

    expect(mainComponent).toBeInTheDocument();
    expect(noUrlBlock).toBeNull();
  });

  it("BreadCrump items must be equal to gitHubURLComponents", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <BreadCrumbBlock />
      </Provider>,
    );

    const ownerBreadCrumb = queryByTestId("breadCrump-owner");
    const repoBreadCrumb = queryByTestId("breadCrump-repo");
    expect(ownerBreadCrumb?.textContent).toEqual("deimonbody");
    expect(repoBreadCrumb?.textContent).toEqual("univer-test");
  });

  it("BreadCrump items href must be correct considering gitHubURLComponents", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <BreadCrumbBlock />
      </Provider>,
    );
    const ownerBreadCrumb = queryByTestId("breadCrump-owner");
    const repoBreadCrumb = queryByTestId("breadCrump-repo");
    const ownerURL = ownerBreadCrumb?.querySelector("a")?.getAttribute("href");
    const repoURL = repoBreadCrumb?.querySelector("a")?.getAttribute("href");

    expect(ownerURL).toEqual("https://github.com/deimonbody");
    expect(repoURL).toEqual("https://github.com/deimonbody/univer-test");
  });

  it("The count of stars shoud be equal 10 considering the store", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <BreadCrumbBlock />
      </Provider>,
    );
    const starCount = queryByTestId("starCount");
    expect(starCount?.textContent).toEqual("10 stars");
  });
});
