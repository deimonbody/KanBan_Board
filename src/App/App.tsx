import { IssuesService } from "@src/services/issues.service";
import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    IssuesService.getAllOpenedIssues();
    IssuesService.getAllClosedIssues();
  }, []);
  return <div />;
};

export default App;
