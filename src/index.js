import { createStore, actionCreator } from "./redux";

const INIT = "init";
const INCRE = "incre";

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

function init(count = 0) {
  store.dispatch(actionCreator(INIT, { count }));
}

function incre() {
  store.dispatch(actionCreator(INCRE));
}

init(); // 초기화
store.dispatch({ type: "incre" }); // 하드 코딩
store.dispatch({ type: INCRE }); // 변수 사용
store.dispatch(actionCreator(INCRE)); // 액션 크리에이터 사용
incre(); // 액션 함수
init(10);
