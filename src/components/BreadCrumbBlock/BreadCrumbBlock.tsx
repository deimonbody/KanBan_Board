import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./style.scss";
import { StarFill } from "react-bootstrap-icons";
import { useAppSelector } from "@src/store/hooks";
import {
  selectCountOfStars,
  selectGitHubURLComponents,
} from "@src/store/issues/selector";

const BreadCrumbBlock: React.FC = () => {
  const urlComponents = useAppSelector(selectGitHubURLComponents);
  const countOfStars = useAppSelector(selectCountOfStars);

  return (
    <div className="mt-2 my-crump-style d-flex align-items-center">
      {urlComponents ? (
        <>
          <Breadcrumb>
            <Breadcrumb.Item
              href={`https://github.com/${urlComponents.owner}`}
              target="_blank"
            >
              {urlComponents.owner}
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href={`https://github.com/${urlComponents.owner}/${urlComponents.repo}`}
              target="_blank"
            >
              {urlComponents.repo}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="d-flex align-items-center ms-4">
            <StarFill color="orange" />
            <p className="mb-0 ms-2">{countOfStars || 0} stars</p>
          </div>
        </>
      ) : (
        <div>No url</div>
      )}
    </div>
  );
};

export default BreadCrumbBlock;
