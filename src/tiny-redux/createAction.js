/**
 * 액션을 생성하는 함수를 반환
 *  - 타입과 페이로드 생성자를 actionCreator에 전달하고 반환한다.
 * @param {string} type - 액션 타입
 * @param {Function} payloadCreator - 페이로드 생성자 함수
 * @returns {Function} actionCreator()
 */
export function createAction(type, payloadCreator) {

  /**
   * 액션 생성
   *  - createAction으로 부터 전달 받은 타입과 페이로드 생성자로 액션 생성
   * @param  {...any} arg - payloadCreator에서 사용할 가변인자
   */
  const actionCreator = (...arg) => {
    const action = { type };
    if (payloadCreator !== undefined) {
      action.payload = payloadCreator(...arg);
    }
    return action;
  };
  return actionCreator;
}

// export function actionCreator(type, payload = {}) {
//   return {
//     type: type,
//     payload: { ...payload }
//   };
// }
