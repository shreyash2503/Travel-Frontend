import { SignInFailed, SignInSuccess, UserData } from "./user.action";
import { Action } from "redux";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: Action) => {
  if (SignInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (SignInFailed.match(action)) {
    return { ...state, error: action.payload };
  }

  return state;
};
