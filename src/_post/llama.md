**자바스크립트의 비동기 프로그래밍**

자바스크립트는 **비동기 프로그래밍**을 지원하는 핵심 기능입니다. 이터레이터 always 실행 시점은 **synchronous code**가 먼저 동작하고, 그 다음 **asynchronous code**가 수행됩니다.

**비동기 프로그래밍이란?**

비동기 프로그래밍이란, 프로그램의 일부가 다른 부분과 독립적으로 작동할 수 있도록 하는 프로그래밍 기술입니다. 자바스크립트는 비동기 프로그래밍을 위해 **Promise**, **Callback** 함수, **Event Listener**와 같은 기능을 제공합니다.

**Promise**

Promise는 자바스크립트의 비동기 프로그래밍에서 중요한 역할을 합니다. Promise는 **then()** method를 사용하여, 성공적인 결과나 실패한 결과에 따라 다른 코드 블록을 실행할 수 있습니다.

```javascript
const promise = new Promise((resolve, reject) => {
  // code here
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.error(err);
  }
);
```

**Callback 함수**

Callback 함수는 자바스크립트의 비동기 프로그래밍에서 사용하는 방법입니다. Callback 함수는 함수 호출이 끝난 후 실행되어야 하는 코드를 담습니다.

```javascript
setTimeout(() => {
  console.log("callback function");
}, 0);
```

**Event Listener**

Event Listener는 HTML 엘리먼트와 자바스크립트 간의 상호작용을 지원합니다. Event Listener는 **addEventListener()** method를 사용하여, 이벤트 발생시 작동하는 코드 블록을 지정할 수 있습니다.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
});
```

**비동기 프로그래밍의 순서**

자바스크립트 interpreter는 synchronous code를 먼저 실행하고, 비동기 task queue에서 micro tasks와 macro tasks를 수행합니다.

- **synchronous code**: 일반적으로 console.log()이나 alert()와 같은 함수 call이 발생할 때 동작합니다.
- **micro tasks**: Promise가 resolve되거나, catch 블록이 실행될 때 동작합니다. 이 task는 micro task queue에 들어갑니다.
- **macro tasks**: setTimeout()나 setInterval()과 같은 함수 call이 발생할 때 동작합니다. 이 task는 macro task queue에 들어갑니다.

**Promise와 Task Queue**

자바스크립트 interpreter는 Promise를 resolve했을 때, micro task queue에 추가합니다. Promise의 then() method가 실행되기 전에, 이전에 resolve된 Promise의 then() method가 먼저 호출됩니다.

```javascript
const promise1 = new Promise((resolve) => {
  console.log("promise1 resolved");
  resolve();
});

const promise2 = new Promise((resolve) => {
  console.log("promise2 resolved");
  resolve();
});

promise1.then(() => {
  console.log("promise1 then() executed");
  promise2.then(() => {
    console.log("promise2 then() executed");
  });
});
```

**비동기 프로그래밍의 예시**

자바스크립트의 비동기 프로그래밍은 Promise, Callback 함수, Event Listener를 사용하여 다양한 방식으로 동작합니다. 예시는 다음과 같습니다.

```javascript
console.log("start");

const promise1 = new Promise((resolve) => {
  console.log(1);
  resolve();
});

promise1.then(() => {
  console.log(2);
});

setTimeout(() => {
  console.log(3);
}, 0);

console.log("end");
```

이 예시는 다음과 같은 결과를 출력합니다.

- `start`
- `1`
- `end`
- `2`
- `3`

**결론**

자바스크립트의 비동기 프로그래밍은 Promise, Callback 함수, Event Listener를 사용하여 다양한 방식으로 동작합니다. 이 feature를 이해하고 사용할 수 있어야만, 자바스크립트 개발자가 됩니다.
