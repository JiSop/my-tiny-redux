import { createStore, actionCreator } from "./redux";

const INIT = "init";
const INCRE = "incre";

function reducer(state = {}, { type }) {
  switch (type) {
    case INCRE:
      return {
        count: state.count + 1
      };
    case INIT:
      return {
        ...state,
        count: 0
      };
    default:
      return {
        ...state
      };
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

function incre() {
  store.dispatch(actionCreator(INCRE));
}

function init() {
  store.dispatch(actionCreator(INIT, { resetCount: 10 }));
}

init();
store.dispatch({ type: "incre" }); // 하드 코딩
store.dispatch({ type: INCRE }); // 변수 사용
store.dispatch(actionCreator(INCRE)); // 액션 크리에이터 사용
incre(); // 액션 함수
