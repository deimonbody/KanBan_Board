import { IIssueResult, IIssues, IssueStateEnum } from "@src/common/interface";

export const getFilteredIssues = (allIsues: IIssueResult[]): IIssues => ({
  closed: allIsues.filter((el) => el.state === IssueStateEnum.CLOSED),
  opened: allIsues.filter((el) => el.state === IssueStateEnum.OPEN),
  todo: allIsues.filter((el) => el.state === IssueStateEnum.TODO) || [],
});
