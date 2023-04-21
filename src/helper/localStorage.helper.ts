export const setItem = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item));
  return true;
};

export const getItem = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return null;
};
