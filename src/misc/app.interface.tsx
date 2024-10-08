/* eslint-disable @typescript-eslint/no-explicit-any */
export interface INoteDetails {
  _id: string;
  title: string;
  description: string;
  tag: string;
  createdAt: number;
}

export interface IReduxAction {
  type:string;
  payload:any;
}
