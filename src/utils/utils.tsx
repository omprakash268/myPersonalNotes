export const getUserStateFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    if (user === null) return undefined;
    return JSON.parse(user);
  } catch (e) {
    console.log("Unable to fetch data from local storage", e);
    return undefined;
  }
};
