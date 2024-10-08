/* eslint-disable @typescript-eslint/no-explicit-any */

import { IReduxAction } from "../../misc/app.interface";

const initialState: any = undefined;

export const userReducer = (state = initialState, action: IReduxAction) => {
  switch (action?.type) {
    case "LOGIN":
      return { ...action?.payload };
    case "LOGOUT":
      return undefined;
    default:
      return state;
  }
};
