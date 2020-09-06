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
