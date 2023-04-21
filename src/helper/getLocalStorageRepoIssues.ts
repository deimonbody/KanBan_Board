import { IGitHubURLComponents } from "@src/common/interface";
import { getItem } from "./localStorage.helper";

export const getLoaclStorageRepoIssues = (
  urlComponents: IGitHubURLComponents,
) => {
  const allIsuesFromLS = getItem(
    `${urlComponents.owner}/${urlComponents.repo}`,
  );
  return allIsuesFromLS;
};
