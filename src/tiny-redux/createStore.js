/**
 * 상태 전체를 보관하는 저장소 생성  
 *  - 앱 내에는 하나의 저장소만 있어야 한다.
 * @param {Function} reducer 
 *  - 주어진 현재 상태와 액션에서 다음 상태를 반환하는 리듀싱 함수
 * @param {*} initialState 
 *  - 초기 상태
 */
export function createStore(reducer, initialState) {

  // 현재 상태
  let state = initialState;

  // 액션이 보내져서 상태가 바뀌게 될 때마다 호출할 콜백들
  const listeners = [];

  /**
   * 현재 상태 반환
   */
  const getState = () => ({ ...state });
  // const getState = () => state;

  /**
   * 변경사항에 대한 리스너 추가  
   *  - 리스너는 액션이 보내져서 상태의 일부가 변경될 수 있을 때마다 호출 된다.
   */
  const subscribe = (subscriber, context = null) => {
    listeners.push({
      subscriber,
      context
    });
  };

  /**
   * 액션을 받아 리듀서로 처리
   *  - 현재 상태와 액션을 리듀서에게 전달
   *  - 리듀서에서 반환한 다음 상태를 현재 상태에 적용
   *  - 등록된 리스너들을 순서대로 실행
   */
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(({ subscriber, context }) => {
      subscriber.call(context);
    });
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}
