import { INCREMENT, DECREMENT } from "./actions";

const DEFAULT_STATE = 0;

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state
  }
}
