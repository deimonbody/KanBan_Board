import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { storeWithData } from "@src/config/test.config";
import React from "react";
import Columns from "./Columns";

describe(Columns, () => {
  it("When it drag Over the component has class column-body--hovered", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithData}>
        <Columns />
      </Provider>,
    );
    const columnBody = queryByTestId("columnBody-2") as HTMLElement;
    fireEvent.dragOver(columnBody);

    expect(columnBody.classList.contains("column-body--hovered")).toEqual(true);
  });
  it("When it drag Leave the component hasn`t class column-body--hovered", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithData}>
        <Columns />
      </Provider>,
    );
    const columnBody = queryByTestId("columnBody-2") as HTMLElement;
    fireEvent.dragLeave(columnBody);

    expect(columnBody.classList.contains("column-body--hovered")).toEqual(
      false,
    );
  });
  it("The column title must be equal the title of the column data", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithData}>
        <Columns />
      </Provider>,
    );
    const columnTitle = queryByTestId("columnTitle-2") as HTMLElement;
    expect(columnTitle.textContent).toEqual("Done");
  });
  it("The task data must be equal the data from the store", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithData}>
        <Columns />
      </Provider>,
    );
    const taskTitle = queryByTestId("issueTitle-1674799713") as HTMLElement;
    const taskId = queryByTestId("issueId-1674799713") as HTMLElement;
    const taskUserNameAndComments = queryByTestId(
      "issueUserNameAndComments-1674799713",
    ) as HTMLElement;

    expect(taskTitle.textContent).toEqual("Second is");
    expect(taskId.textContent).toEqual("#1674799713");
    expect(taskUserNameAndComments.textContent).toEqual(
      "deimonbody | Comments 0",
    );
  });
});
