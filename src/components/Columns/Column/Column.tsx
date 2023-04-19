import React from "react";
import "./style.scss";
import Task from "../Task/Task";

interface IProps {
  title: string;
}

const Column: React.FC<IProps> = ({ title }) => {
  return (
    <div className="d-flex flex-column">
      <p className="text-center fw-bold fs-5">{title}</p>
      <div className="column-body rounded p-4">
        <Task />
      </div>
    </div>
  );
};

export default Column;
