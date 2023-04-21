export enum IssueStateEnum {
  OPEN = "open",
  CLOSED = "closed",
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
  all: IIssueResult[];
}

export interface IGitHubURLComponents {
  owner: string;
  repo: string;
}

export interface IColumn {
  id: number;
  title: string;
  issues: IIssueResult[];
}
