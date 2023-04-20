import React from "react";
import "./style.scss";
import { IIssueResult } from "@src/common/interface";

interface IProps {
  issueData: IIssueResult;
}

const Task: React.FC<IProps> = ({ issueData }) => {
  return (
    <div className="rounded p-3 task d-flex flex-column mb-3">
      <p className="fw-bold mb-1 fs-6 task__title">{issueData.title}</p>
      <p className="fs-7 mb-0 task__subtitle">#{issueData.id}</p>
      <p className="fs-7 mb-0 task__subtitle">
        {issueData.userName} | Comments {issueData.comments}
      </p>
    </div>
  );
};

export default Task;
