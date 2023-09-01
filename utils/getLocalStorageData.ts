export const getLocalStorageData = (key: string, defaultValue: any) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};
