export const getUserStateFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    console.log("user local storage",user)

    if (user === null) return undefined;
    console.log("user found",user)
    return JSON.parse(user);
  } catch (e) {
    console.log("Unable to fetch data from local storage", e);
    return undefined;
  }
};
