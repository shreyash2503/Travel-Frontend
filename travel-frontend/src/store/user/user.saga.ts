import { takeLatest, put, all, call } from "typed-redux-saga";

import { USER_ACTION_TYPES } from "./user.types";
import { SignInStart, SignInSuccess, UserData } from "./user.action";
import { loginUser } from "../../API/user.requests";
import { ResponseObject } from "../../utils/response.utils";

export function* signInWithEmail({
  payload: { email, password },
}: SignInStart) {
  const data = yield* call(loginUser, email, password);
  const { _id, photo, role } = data?.data.data.user;
  const token = data?.data.token;
  if (data?.status === 200 && data.data) {
    const responseData: ResponseObject<UserData> = {
      status: data.data.status,
      data: {
        _id: _id,
        email: email,
        token: token,
        photo: photo,
        role: role,
      },
    };
    yield* put(SignInSuccess(responseData.data));
  }
}

export function* onSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield* all([call(onSignInStart)]);
}
