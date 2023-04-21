import { IIssueResult, IIssues } from "@src/common/interface";

export const isElementExists = (el: IIssueResult, arr: IIssues) => {
  // The function to understand whether issue already exists in on of the columns
  const allIssuesID = [...arr.closed, ...arr.opened, ...arr.todo].map(
    (issue) => issue.id,
  );
  return (
    allIssuesID.includes(el.id) ||
    allIssuesID.includes(el.id) ||
    allIssuesID.includes(el.id)
  );
};

export const getConcatIssues = (firstArr: IIssues, secondArr: IIssues) => {
  // If the current array from local storage has some issues and arr from server (second) has differend issues,concat them;

  const concatClosed = [
    ...firstArr.closed,
    ...secondArr.closed.filter((el) => !isElementExists(el, firstArr)),
  ];

  const concatOpened = [
    ...firstArr.opened,
    ...secondArr.opened.filter((el) => !isElementExists(el, firstArr)),
  ];

  const concatToDo = [
    ...firstArr.todo,
    ...secondArr.todo.filter((el) => !isElementExists(el, firstArr)),
  ];

  return {
    closed: concatClosed,
    opened: concatOpened,
    todo: concatToDo,
  };
};
