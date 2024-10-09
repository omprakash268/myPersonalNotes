import { IUserCredentials } from "../misc/app.interface";

// Helper function to save state to localStorage
export const saveToLocalStorage = (userDetails: IUserCredentials) => {
  try {
    const serializedState = JSON.stringify(userDetails);
    localStorage.setItem("user", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage:", e);
  }
};

// Helper function to load state from localStorage
export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null || serializedState === "null") return null; // Return undefined to allow Redux to initialize with empty state
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from localStorage:", e);
    return null;
  }
};
