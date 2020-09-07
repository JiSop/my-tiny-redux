import { createStore } from "./tiny-redux";
import { counterReducer } from './counterReducer';
import { initAction, increAction, decreAction } from './counterReducer';


// SECTION : create store, subscribe
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// SECTION : dispatch
store.dispatch(increAction()); // count: 1
store.dispatch(increAction()); // count: 2
store.dispatch(initAction({ count: 10 })); // count: 10
store.dispatch(decreAction()); // count: 9

function init(count = 0) {
  store.dispatch(initAction({ count }));
}
function incre() {
  store.dispatch(increAction());
}
function decre() {
  store.dispatch(decreAction());
}

init(); // count: 0
incre(); // count: 1
incre(); // count: 2
init(10); // count: 10
decre(); // count: 9
