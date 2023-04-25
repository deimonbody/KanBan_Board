import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { storeWithUrlComponents } from "@src/config/test.config";
import { Provider } from "react-redux";
import { toast } from "react-toastify";
import EnterRepo from "./EnterRepo";

jest.spyOn(toast, "success");
jest.spyOn(toast, "error");

describe(EnterRepo, () => {
  it("At the start the input value must be empty", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <EnterRepo />
      </Provider>,
    );
    const testInput = queryByTestId("inputTest") as HTMLInputElement;
    const testInputValue = testInput?.value;
    expect(testInputValue).toEqual("");
  });

  it("The form input must be equal to the state inputVal", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <EnterRepo />
      </Provider>,
    );
    const testInput = queryByTestId("inputTest") as HTMLInputElement;
    fireEvent.change(testInput, { target: { value: "https" } });
    const testInputValue = testInput?.value;
    expect(testInputValue).toEqual("https");
  });

  it("The success message must be displayed when it`s Success url path search and dispatch is called", () => {
    const dispatchMock = jest.fn();
    jest
      .spyOn(storeWithUrlComponents, "dispatch")
      .mockImplementation(dispatchMock);

    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <EnterRepo />
      </Provider>,
    );

    const testInput = queryByTestId("inputTest") as HTMLInputElement;
    const testButton = queryByTestId("buttonTest") as HTMLButtonElement;

    fireEvent.change(testInput, {
      target: { value: "https://github.com/deimonbody/univer-test" },
    });

    fireEvent.click(testButton);
    expect(dispatchMock).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith("Success");
  });

  it("The Error message should be displayed when it`s Error url path search and dispatch is not called", () => {
    const dispatchMock = jest.fn();
    jest
      .spyOn(storeWithUrlComponents, "dispatch")
      .mockImplementation(dispatchMock);
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <EnterRepo />
      </Provider>,
    );
    const testInput = queryByTestId("inputTest") as HTMLInputElement;
    const testButton = queryByTestId("buttonTest") as HTMLButtonElement;

    fireEvent.change(testInput, {
      target: { value: "https://aggg" },
    });
    fireEvent.click(testButton);
    expect(dispatchMock).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith("The path of url isn`t correct");
  });

  it("The form input should be equal empty string when it is clicked on button", () => {
    const { queryByTestId } = render(
      <Provider store={storeWithUrlComponents}>
        <EnterRepo />
      </Provider>,
    );
    const testInput = queryByTestId("inputTest") as HTMLInputElement;
    const testInputValue = testInput?.value;
    const testButton = queryByTestId("buttonTest") as HTMLButtonElement;

    fireEvent.change(testInput, {
      target: { value: "https://aggg" },
    });
    fireEvent.click(testButton);
    expect(testInputValue).toEqual("");
  });
});
