import { Action } from "redux";

type Matchable<AC extends () => Action> = AC & {
  type: ReturnType<AC>["type"];
  match(action: Action): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => Action & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => Action & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: Action) {
      return action.type === type;
    },
  });
}

export type ActionwithPayload<T extends string, P> = {
  type: T;
  payload: P;
};
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionwithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return {
    type,
    payload,
  };
}
