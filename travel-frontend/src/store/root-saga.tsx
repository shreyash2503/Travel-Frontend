import { all } from "typed-redux-saga";
import { call } from "typed-redux-saga";

import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(userSagas)]);
}
