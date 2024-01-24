import { USER_ACTION_TYPES } from "./user.types";

import {
  ActionwithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer.utils";

import { Action } from "redux";
import { ResponseObject } from "../../utils/response.utils";

export type UserData = {
  token: string;
  _id: string;
  email: string;
  photo: string;
  role: string;
};

export type SetCurrentUser = ActionwithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export type SignInData = {
  email: string;
  password: string;
};

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export type SignInStart = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_IN_START,
  SignInData
>;

export const signInStart = withMatcher(
  (email: string, password: string): SignInStart =>
    createAction(USER_ACTION_TYPES.SIGN_IN_START, {
      email,
      password,
    })
);

export type SignInSuccess = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  ResponseObject<UserData>
>;

export const SignInSuccess = withMatcher((user: UserData) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, { user })
);

export type SignInFailed = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export const SignInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);
