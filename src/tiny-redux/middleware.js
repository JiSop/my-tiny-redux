// 미들웨어의 기본적인 형태
const myMiddleware = store => next => action => {
  /* ... */
  next(action);
};
