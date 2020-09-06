export function createAction(type, payloadCreator) {
  const actionCreator = (...arg) => {
    const action = { type, payload: {} };
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
