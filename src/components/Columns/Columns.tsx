import React from "react";
import Column from "./Column/Column";

const Columns: React.FC = () => {
  return (
    <div className="mt-5 container">
      <div className="row">
        <div className="col-4 p-0 pe-3">
          <Column title="To Do" />
        </div>
        <div className="col-4 p-0 pe-3">
          <Column title="In Progress" />
        </div>
        <div className="col-4 p-0">
          <Column title="Done" />
        </div>
      </div>
    </div>
  );
};

export default Columns;
