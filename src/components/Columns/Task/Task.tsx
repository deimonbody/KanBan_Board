import React from "react";
import "./style.scss";

const Task: React.FC = () => {
  return (
    <div className="rounded p-3 task d-flex flex-column">
      <p className="fw-bold mb-1 fs-6 task__title">Issue 1</p>
      <p className="fs-7 mb-0 task__subtitle">#111 opened 3 days</p>
      <p className="fs-7 mb-0 task__subtitle">Admin | Comments 3</p>
    </div>
  );
};

export default Task;
