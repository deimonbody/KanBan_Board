import { ColumnStatus, IssueStateEnum } from "@src/common/interface";

export const getIssueNewStatus = (columnStatus: ColumnStatus) => {
  switch (columnStatus) {
    case ColumnStatus.IN_PROGRESS: {
      return IssueStateEnum.OPEN;
    }
    case ColumnStatus.DONE: {
      return IssueStateEnum.CLOSED;
    }
    case ColumnStatus.TO_DO: {
      return IssueStateEnum.TODO;
    }
  }
};
