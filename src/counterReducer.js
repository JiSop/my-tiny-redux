import { createAction } from "./tiny-redux";

// SECTION : Action Type
const INIT = 'INIT';
const INCRE = 'INCRE';
const DECRE = 'DECRE';

// SECTION : Action Creator
export const initAction = createAction(INIT, ({ count }) => ({ count }));
export const increAction = createAction(INCRE);
export const decreAction = createAction(DECRE);

// SECTION : Reducer
export function counterReducer(state, { type, payload }) {
  switch (type) {
    case INIT:
      return {
        ...state,
        count: payload.count
      };
    case INCRE:
      return {
        ...state,
        count: state.count + 1
      };
    case DECRE:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return {
        ...state
      };
  }
}
