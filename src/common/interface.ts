export enum IssueStateEnum {
  OPEN = "open",
  CLOSED = "closed",
  TODO = "todo",
}

export interface IIssue {
  title: string;
  comments: number;
  id: string;
  state: IssueStateEnum;
}

export interface IIssueFromGitHub extends IIssue {
  user: { login: string };
}

export interface IIssueResult extends IIssue {
  userName: string;
}

export interface IIssues {
  closed: IIssueResult[];
  opened: IIssueResult[];
  todo: IIssueResult[];
}

export interface IGitHubURLComponents {
  owner: string;
  repo: string;
}

export enum ColumnStatus {
  IN_PROGRESS = "open",
  DONE = "closed",
  TO_DO = "todo",
}

export interface IColumn {
  id: number;
  title: string;
  issues: IIssueResult[];
  status: ColumnStatus;
}
