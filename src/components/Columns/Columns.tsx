import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { selectColumns } from "@src/store/columns/selector";
import {
  IColumn,
  IGitHubURLComponents,
  IIssueResult,
} from "@src/common/interface";
import { setColumns } from "@src/store/columns/actions";
import { selectGitHubURLComponents } from "@src/store/issues/selector";
import { getIssueNewStatus } from "@src/helper/getIssueNewStatus";
import Column from "./Column/Column";

const Columns: React.FC = () => {
  const columns = useAppSelector(selectColumns);
  const gitHubUrlComponents = useAppSelector(selectGitHubURLComponents);
  const [currentColumn, setCurrentColumn] = useState<IColumn | null>(null);
  const [currentItem, setCurrentItem] = useState<IIssueResult | null>(null);
  const dispatch = useAppDispatch();

  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn,
    issueData: IIssueResult,
  ) => {
    setCurrentColumn(column); // save the column from which was selected item;
    setCurrentItem(issueData); // save the selected item;
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const hoveredElement = e.target as HTMLElement;
    if (hoveredElement.hasAttribute("data-is-column")) {
      hoveredElement.classList.remove("column-body--hovered");
    }
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const hoveredElement = e.target as HTMLElement;
    if (hoveredElement.hasAttribute("data-is-column")) {
      hoveredElement.classList.add("column-body--hovered");
    }
  };

  const dragDropHandler = (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn,
  ) => {
    dragLeaveHandler(e);
    if (column.id === currentColumn?.id) return false; // user can`t add the issue in the same table;

    const overedColumn = { ...column } as IColumn;
    const fromColumn = JSON.parse(JSON.stringify(currentColumn)) as IColumn;
    const newIssue = { ...currentItem } as IIssueResult;

    const currentItemIndex = fromColumn.issues.findIndex(
      (el) => el.id === newIssue.id,
    );

    fromColumn.issues.splice(currentItemIndex, 1); // delete the issue from begin column

    overedColumn.issues = [...overedColumn.issues, newIssue];
    newIssue.state = getIssueNewStatus(column.status); // change status of the issue

    const newColumns = columns.map((el) => {
      if (el.id === overedColumn.id) return overedColumn;
      if (el.id === fromColumn.id) return fromColumn as IColumn;
      return el;
    });

    dispatch(
      setColumns(newColumns, gitHubUrlComponents as IGitHubURLComponents),
    );
  };

  return (
    <div className="mt-5 container">
      <div className="row">
        {columns.map((column, index) => (
          <Column
            key={index}
            index={index}
            column={column}
            dragOverHandler={dragOverHandler}
            dragDropHandler={dragDropHandler}
            dragLeaveHandler={dragLeaveHandler}
            dragStartHandler={dragStartHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Columns;
