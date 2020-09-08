# my-tiny-redux

간단하게 리덕스 구현해보면서 이해하기!



```bash
$ yarn install
$ yarn start
```



## redux 기본 개념

### redux !== flux

Redux는 Flux의 영향을 받아 새로 구현한 컨테이너 라이브러리, Flux의 큰 특징들이 Redux에 잘 녹아있다.



### Redux의 3가지 기본 원칙

1. Single source of truth (SSOT)
   - 모든 상태는 하나의 저장소 안에 하나의 객체 트리 구조로 저장된다.
2. Read-only state
   - 상태는 읽기 전용이다.
3. Changes from pure functions
   - 순수 함수로 변화시켜야 한다.

> 액션을 전달하여 새로운 상태를 반환하여 교체하는 것이 상태를 변화시키는 유일한 방법이다.



### Action, Reducer, Store

- **Action** :  
  상태를 어떻게 변경시킬지 추상화한 표현, 단순 객체로 `type` 프로퍼티가 반드시 있어야한다.
- **Reducer** :  
  다음 상태를 반환하는 함수, 이전 상태와 액션을 받아 처리하고 다음 상태를 반환한다.
- **Store** :  
  상태를 저장하고 읽을 수 있게 하며 액션을 보내거나 상태의 변화를 감지할 수 있도록 API를 제공하는 객체

  

  

  

  


## tiny-redux 구현



### createStore

상태 전체를 보관하는 저장소를 생성한다.  
store는 애플리케이션 내에 하나만 있어야 한다. (SSOT)

```js
export function createStore(reducer, initialState) {
  let state = initialState; // 현재 상태, 초기 상태를 전달하는 것도 가능하다.
  const listeners = []; // 상태가 바뀌게 될 때마다 호출할 콜백들

  /* ... */

  return {
    getState,
    subscribe,
    dispatch,
  };
}
```





#### getState

현재 상태를 반환한다. 

값을 변경 하는 것은 불가능 하다.

```js
const getState = () => ({ ...state });
```

  

  


#### subscribe

변경사항에 대한 리스너를 추가한다.

리스너는 액션이 보내져서 상태의 일부가 변경될 수 있을 때마다 호출 된다.

```js
const subscribe = (subscriber, context = null) => {
  listeners.push({
    subscriber,
    context
  });
};
```

  

  


#### dispatch

액션을 받아 리듀서로 처리한다.

1. 현재 상태와 액션을 리듀서에게 전달
2. 리듀서에서 반환한 다음 상태를 현재 상태에 적용
3. 등록된 리스너들을 순서대로 실행

```js
const dispatch = action => {
  state = reducer(state, action);
  listeners.forEach(({ subscriber, context }) => {
    subscriber.call(context);
  });
};
```

  

  

  

  


## reference

[우아한테크러닝 redux 구현 예제](https://gist.github.com/ibare/1ed63de0c09c94a7ac79713d57b80f8d)

[tiny-redux: Writing Redux from scratch for learning](https://medium.com/@jamischarles/tiny-redux-writing-redux-from-scratch-for-learning-cd10cecbc87f)

[FSA](https://github.com/redux-utilities/flux-standard-action)

[redux-action/createAction](https://github.com/redux-utilities/redux-actions/blob/master/src/createAction.js)

[redux/createStore v1.0.0](https://github.com/reduxjs/redux/blob/v1.0.0/src/createStore.js)

[redux/createStore v4.0.0](https://github.com/reduxjs/redux/blob/v4.0.0/src/createStore.js)

[Redux 분석하기 : TOAST Meetup](https://meetup.toast.com/posts/111)
