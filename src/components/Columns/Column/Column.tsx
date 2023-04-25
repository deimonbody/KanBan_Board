import React from "react";
import "./style.scss";
import { IColumn, IIssueResult } from "@src/common/interface";
import Task from "../Task/Task";

interface IProps {
  column: IColumn;
  index: number;
  dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragDropHandler: (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn,
  ) => void;
  dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragStartHandler: (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn,
    issueData: IIssueResult,
  ) => void;
}

const Column: React.FC<IProps> = ({
  column,
  index,
  dragOverHandler,
  dragDropHandler,
  dragLeaveHandler,
  dragStartHandler,
}) => {
  return (
    <div className={`col-4 p-0 ${index === 2 ? "p-0" : "pe-3"}`}>
      <div className="d-flex flex-column">
        <p
          className="text-center fw-bold fs-5"
          data-testid={`columnTitle-${index}`}
        >
          {column.title}
        </p>
        <div
          data-testid={`columnBody-${index}`}
          className="column-body rounded p-4"
          data-is-column="true"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dragDropHandler(e, column)}
          onDragLeave={(e) => dragLeaveHandler(e)}
        >
          {column.issues.map((el) => (
            <Task
              key={el.id}
              issueData={el}
              column={column}
              dragStartHandler={dragStartHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
