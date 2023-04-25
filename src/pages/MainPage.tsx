import BreadCrumbBlock from "@src/components/BreadCrumbBlock/BreadCrumbBlock";
import Columns from "@src/components/Columns/Columns";
import EnterRepo from "@src/components/EnterRepo/EnterRepo";
import Loader from "@src/components/Loader/Loader";
import NothingWasFound from "@src/components/NothingWasFound/NothingWasFound";
import { useAppSelector } from "@src/store/hooks";
import { selectIssues, selectIssuesLoading } from "@src/store/issues/selector";
import React from "react";

const MainPage: React.FC = () => {
  const isLoading = useAppSelector(selectIssuesLoading);
  const issues = useAppSelector(selectIssues);

  if (isLoading) return <Loader />;

  return (
    <div className="d-flex flex-column px-5 py-3" data-testid="mainPageContent">
      <EnterRepo />
      {issues ? (
        <div data-testid="mainPageIssuesBlock">
          <BreadCrumbBlock />
          <Columns />
        </div>
      ) : (
        <NothingWasFound />
      )}
    </div>
  );
};

export default MainPage;
