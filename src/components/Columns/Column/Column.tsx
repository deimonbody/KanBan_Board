import React from "react";
import "./style.scss";
import { IIssueResult } from "@src/common/interface";
import Task from "../Task/Task";

interface IProps {
  title: string;
  issues: IIssueResult[];
}

const Column: React.FC<IProps> = ({ title, issues }) => {
  return (
    <div className="d-flex flex-column">
      <p className="text-center fw-bold fs-5">{title}</p>
      <div className="column-body rounded p-4">
        {issues.map((el) => (
          <Task key={el.id} issueData={el} />
        ))}
      </div>
    </div>
  );
};

export default Column;
