import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { selectColumns } from "@src/store/columns/selector";
import { IColumn, IIssueResult } from "@src/common/interface";
import { setColumns } from "@src/store/columns/actions";
import Column from "./Column/Column";

const Columns: React.FC = () => {
  const columns = useAppSelector(selectColumns);

  const [currentColumn, setCurrentColumn] = useState<IColumn | null>(null);
  const [currentItem, setCurrentItem] = useState<IIssueResult | null>(null);
  const dispatch = useAppDispatch();

  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn,
    issueData: IIssueResult,
  ) => {
    setCurrentColumn(column);
    setCurrentItem(issueData);
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
    if (
      hoveredElement.hasAttribute("data-is-column")
      // hoveredElement.dataset.index !== "0"
    ) {
      hoveredElement.classList.add("column-body--hovered");
    }
  };

  const dragDropHandler = (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn,
  ) => {
    dragLeaveHandler(e);
    if (column.id === currentColumn?.id) return false;
    if (column.id === 1) return false;

    const overedColumn = { ...column } as IColumn;
    const fromColumn = JSON.parse(JSON.stringify(currentColumn)) as IColumn;

    overedColumn.issues = [...overedColumn.issues, currentItem as IIssueResult];

    const currentItemIndex = fromColumn.issues.indexOf(
      currentItem as IIssueResult,
    );

    fromColumn.issues.splice(currentItemIndex, 1);

    dispatch(
      setColumns(
        columns.map((el) => {
          if (el.id === overedColumn.id) return overedColumn;
          if (el.id === fromColumn.id) return fromColumn as IColumn;
          return el;
        }),
      ),
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
