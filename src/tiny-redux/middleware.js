/**
 * 미들웨어의 기본적인 형태
 */
const myMiddleware = store => next => action => {
  /* ... */
  next(action);
};

export const logger = store => next => action => {
  console.log("logger: ", action.type);
  next(action);
};
export const monitor = store => next => action => {
  setTimeout(() => {
    console.log("monitor: ", action.type);
    next(action);
  }, 2000);
};
