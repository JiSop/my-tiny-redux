import { createStore, createAction } from "./redux";



// SECTION : Action Type
const INIT = 'INIT';
const INCRE = 'INCRE';
const DECRE = 'DECRE';

// SECTION : Action Creator
const initAction = createAction(INIT, ({ count }) => ({ count }));
const increAction = createAction(INCRE);
const decreAction = createAction(DECRE);

// SECTION : Reducer
function reducer(state = {}, { type, payload }) {
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

// SECTION : create store, subscribe
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});


function init(count = 0) {
  store.dispatch(initAction({ count }));
}
function incre() {
  store.dispatch(increAction());
}
function decre() {
  store.dispatch(decreAction());
}

// SECTION : dispatch
store.dispatch(initAction({ count: 0 })); // count: 0
store.dispatch(increAction()); // count: 1
store.dispatch(increAction()); // count: 2
store.dispatch(decreAction()); // count: 1
init(); // count: 0
incre(); // count: 1
incre(); // count: 2
init(10); // count: 10
decre(); // count: 9
