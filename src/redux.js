export function createStore(reducer) {
  let state;
  const listeners = [];

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

  const getState = () => ({ ...state });

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export function actionCreator(type, payload = {}) {
  return {
    type: type,
    payload: { ...payload }
  };
}
