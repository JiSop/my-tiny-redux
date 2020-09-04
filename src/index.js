import { createStore } from "./redux";

const INCRE = "incre";
const RESET = "reset";

function reducer(state = {}, action) {
  if (action.type === INCRE) {
    return {
      ...state,
      count: state.count ? state.count + 1 : 1
    };
  } else if (action.type === RESET) {
    return {
      ...state,
      count: 0
    };
  }
  return state;
}

const store = createStore(reducer);

function update() {
  console.log(store.getState());
}

store.subscribe(update);

function actionCreator(type, data) {
  return {
    ...data,
    type: type
  };
}

function incre() {
  store.dispatch(actionCreator(INCRE));
}

function reset() {
  store.dispatch(actionCreator(RESET, { resetCount: 10 }));
}

store.dispatch({ type: "incre" });
store.dispatch({ type: INCRE });
store.dispatch(actionCreator(INCRE));
incre();
reset();

console.log(store.getState());
