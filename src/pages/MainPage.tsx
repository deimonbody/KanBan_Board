import BreadCrumbBlock from "@src/components/BreadCrumbBlock/BreadCrumbBlock";
import Columns from "@src/components/Columns/Columns";
import EnterRepo from "@src/components/EnterRepo/EnterRepo";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="d-flex flex-column px-5 py-3">
      <EnterRepo />
      <BreadCrumbBlock />
      <Columns />
    </div>
  );
};

export default MainPage;
