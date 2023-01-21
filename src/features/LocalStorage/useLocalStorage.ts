export const useLocalStorage = (key: string) => {
  let initialValue: any = [];

  try {
    initialValue = JSON.parse(localStorage.getItem(key) || "");
  } catch (e) {
    initialValue = [];
  }

  const setValueInStorage = (key: any, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return { initialValue, setValueInStorage };
};
