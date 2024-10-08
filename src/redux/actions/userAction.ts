/* eslint-disable @typescript-eslint/no-explicit-any */

export const loginUserDetails = (value?: any) => {
  return {
    type: "LOGIN",
    payload: value,
  };
};

export const logoutUserDetails = (value?: any) => {
  return {
    type: "LOGOUT",
    payload: value,
  };
};
