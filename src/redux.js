export function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => ({ ...state });

  const subscribe = (subscriber, context = null) => {
    listeners.push({
      subscriber,
      context
    });
  };

  const publish = () => {
    listeners.forEach(({ subscriber, context }) => {
      subscriber.call(context);
    });
  };

  const dispatch = action => {
    state = reducer(state, action);
    publish();
  };


  return {
    getState,
    subscribe,
    dispatch,
  };
}

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
