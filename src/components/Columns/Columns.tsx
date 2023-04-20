import React from "react";
import { useAppSelector } from "@src/store/hooks";
import { selectIssues } from "@src/store/issues/selector";
import { IIssueResult } from "@src/common/interface";
import Column from "./Column/Column";

const Columns: React.FC = () => {
  const issues = useAppSelector(selectIssues);

  return (
    <div className="mt-5 container">
      <div className="row">
        <div className="col-4 p-0 pe-3">
          <Column title="To Do" issues={issues?.all as IIssueResult[]} />
        </div>
        <div className="col-4 p-0 pe-3">
          <Column
            title="In Progress"
            issues={issues?.opened as IIssueResult[]}
          />
        </div>
        <div className="col-4 p-0">
          <Column title="Done" issues={issues?.closed as IIssueResult[]} />
        </div>
      </div>
    </div>
  );
};

export default Columns;
