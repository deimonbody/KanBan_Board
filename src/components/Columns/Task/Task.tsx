import React from "react";
import "./style.scss";
import { IColumn, IIssueResult } from "@src/common/interface";

interface IProps {
  column: IColumn;
  issueData: IIssueResult;
  dragStartHandler: (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn,
    issueData: IIssueResult,
  ) => void;
}

const Task: React.FC<IProps> = ({ column, issueData, dragStartHandler }) => {
  return (
    <div
      data-testid="taskTest"
      className="rounded p-3 task d-flex flex-column mb-3"
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, column, issueData)}
    >
      <p
        className="fw-bold mb-1 fs-6 task__title"
        data-testid={`issueTitle-${issueData.id}`}
      >
        {issueData.title}
      </p>
      <p
        className="fs-7 mb-0 task__subtitle"
        data-testid={`issueId-${issueData.id}`}
      >
        #{issueData.id}
      </p>
      <p
        className="fs-7 mb-0 task__subtitle"
        data-testid={`issueUserNameAndComments-${issueData.id}`}
      >
        {issueData.userName} | Comments {issueData.comments}
      </p>
    </div>
  );
};

export default Task;
