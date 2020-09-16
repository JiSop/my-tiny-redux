import { createStore } from "./tiny-redux";
import { counterReducer } from './counterReducer';
import { initAction, increAction, decreAction } from './counterReducer';

// SECTION : DOM elements ref
const Counter = document.getElementById('counter');
const IncreBtn = document.getElementById('incre');
const DecreBtn = document.getElementById('decre');
const ClearBtn = document.getElementById('clear');

// SECTION : Initial state, Create store
const initialState = {
  count: 0
};
const logger = store => next => action => {
  console.log("logger: ", action.type);
  next(action);
};
const monitor = store => next => action => {
  setTimeout(() => {
    console.log("monitor: ", action.type);
    next(action);
  }, 2000);
};

const store = createStore(counterReducer, initialState, [logger, monitor]);

// SECTION : Render, Subscribe
const render = () => {
  Counter.innerText = store.getState().count;
  console.log(store.getState());
};
store.subscribe(render);
render(); // 초기 렌더링

// SECTION : dispatch
function init(count = 0) {
  store.dispatch(initAction({ count }));
}
function incre() {
  store.dispatch(increAction());
}
function decre() {
  store.dispatch(decreAction());
}

IncreBtn.addEventListener('click', () => {
  incre();
})
DecreBtn.addEventListener('click', () => {
  decre();
})
ClearBtn.addEventListener('click', () => {
  init();
})
