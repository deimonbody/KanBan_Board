import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./style.scss";
import { StarFill } from "react-bootstrap-icons";

const BreadCrumbBlock: React.FC = () => {
  return (
    <div className="mt-2 my-crump-style d-flex align-items-center">
      <Breadcrumb>
        <Breadcrumb.Item href="#">FaceBook</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          React
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="d-flex align-items-center ms-4">
        <StarFill color="orange" />
        <p className="mb-0 ms-2">194.3 K stars</p>
      </div>
    </div>
  );
};

export default BreadCrumbBlock;
