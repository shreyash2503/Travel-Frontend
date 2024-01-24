import {
  legacy_createStore,
  applyMiddleware,
  Middleware,
  compose,
} from "redux";
import logger from "redux-logger";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { apply } from "typed-redux-saga";
import { UserState } from "./user/user.reducer";

export interface RootState {
  user: UserState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const otherMiddlewares = [sagaMiddleware];

const middleWares: any[] = [logger, ...otherMiddlewares];

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

const store = legacy_createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
