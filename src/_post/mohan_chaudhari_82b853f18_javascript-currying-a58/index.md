---

uuid: "mohan_chaudhari_82b853f18_javascript-currying-a58"

title: "자바스크립트 커링: 함수형 프로그래밍의 강력한 도구"

createdAt: "2024-09-24 15:02:11"

tags: ["javascript", "tutorial", "frontend", "webdev"]

description: "자바스크립트에서 커링의 개념과 활용법을 심도 있게 설명합니다. 함수형 프로그래밍을 이해하는 데 필수적입니다."

---

# 자바스크립트 커링: 함수형 프로그래밍의 강력한 도구

## 소개

커링(Currying)은 함수형 프로그래밍에서 매우 중요한 개념 중 하나로, 여러 인자를 받는 함수를 단일 인자를 받는 여러 함수로 변환하는 기술입니다. 즉, 매개변수를 하나씩 처리할 수 있도록 함수를 변형하는 방법입니다. 이는 코드의 재사용성을 높이고, 특정 매개변수에 대해 부분적으로 응용할 수 있게 도와줍니다. 자바스크립트에서는 함수가 일급 객체이기 때문에 커링의 이점을 극대화할 수 있습니다.

이 글에서는 커링의 기본 개념, 구현 방법, 활용 방안, 그리고 부분 함수 적용(partial application)에 대해 살펴보겠습니다. 이를 통해 커링이 자바스크립트 개발자에게 얼마나 유용한 도구인지 이해할 수 있을 것입니다.

## 배경 및 필요성

함수형 프로그래밍이 널리 퍼지면서, 커링은 개발자들 사이에서 인지도가 높아졌습니다. 많은 경우, 함수를 호출할 때 여러 인자를 제공해야 했습니다. 이는 코드 작성 시 유연성을 저하시킬 수 있으며, 특히 복잡한 애플리케이션에서는 인자 처리의 책임이 커지게 됩니다. 따라서 커링을 사용하면 다음과 같은 장점을 누릴 수 있습니다:

1. **코드의 가독성 향상**: 함수가 인자를 하나씩 받음으로써, 호출하는 코드가 보다 깨끗하고 이해하기 쉬워집니다.
2. **부분 적용 가능성**: 커링을 사용하면 일부 인자를 미리 채워둔 함수로 생성할 수 있어, 재사용성을 높이고 중복 코드를 줄일 수 있습니다.
3. **모듈화**: 커링 기능을 통해 복잡한 기능을 간단히 분리할 수 있어, 각 부분을 독립적으로 테스트하고 유지보수할 수 있습니다.

이러한 점에서 커링은 자바스크립트를 사용하는 개발자들에게 매우 중요한 개념입니다.

## 핵심 내용

커링은 다소 간단한 개념이지만, 그 원리는 매우 강력합니다. 기본적으로 커링은 다중 인자를 받는 함수를 단일 인자를 받는 함수 체인으로 변환하는 방식입니다. 예를 들어, 두 개의 인자를 받는 함수를 다음과 같이 커링할 수 있습니다:

```javascript
function add(a) {
    return function(b) {
        return a + b;
    }
}
```

위의 예제에서 `add` 함수는 하나의 인자 `a`를 받습니다. 이 함수는 또 다른 함수를 반환하며, 이 함수는 두 번째 인자 `b`를 처리하여 `a`와 `b`의 합계를 반환합니다. 이를 통해 다음과 같이 사용할 수 있습니다:

```javascript
const addFive = add(5);
console.log(addFive(10)); // 15
```

이제 `addFive`는 `5`를 인자로 받은 상태로 저장되어 있어, 새로운 인자 `10`을 받아 `15`를 반환합니다. 이는 코드의 재사용성을 높이고, 커링을 통해 다양한 함수 조합을 쉽게 만들어냅니다.

### 구현 방법

자바스크립트에서 커링을 구현하는 방법은 여러 가지가 있지만, 가장 일반적인 방법 중 하나는 재귀를 사용하는 것입니다. 아래 예시를 통해 커링을 구현하는 방법을 알아보겠습니다:

```javascript
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }
        return function(...args2) {
            return curried(...args.concat(args2));
        };
    };
}

function multiply(x, y, z) {
    return x * y * z;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
```

여기서 `curry` 함수는 주어진 함수를 커링된 형태로 변환합니다. 인자가 충분히 전달되면 원래의 함수를 호출하고, 그렇지 않으면 다시 함수를 반환하여 인자를 받을 수 있게 합니다. 이렇게 구현된 커링 함수를 활용하면, 다양한 시나리오에서의 함수 사용이 용이해집니다.

## 예시

자바스크립트에서 커링을 사용하여 더 간단하고 직관적인 코드로 변환할 수 있는 예시를 살펴보겠습니다. 예를 들어, 특정 HTML 요소에 스타일을 적용하는 경우입니다. 일반적으로 아래와 같은 형태로 스타일을 적용할 수 있습니다:

```javascript
function setStyle(element, property, value) {
    element.style[property] = value;
}
```

이 함수를 커링하여 스타일을 미리 설정할 수 있게 변경해보겠습니다:

```javascript
function currySetStyle(element) {
    return function(property) {
        return function(value) {
            element.style[property] = value;
        };
    };
}

const myElement = document.getElementById('myElement');
const setBackgroundColor = currySetStyle(myElement)('backgroundColor');
setBackgroundColor('red'); // myElement의 배경색을 빨간색으로 변경
```

이처럼 커링을 사용하여 특정 요소의 스타일을 미리 지정하는 함수들을 생성할 수 있습니다. 이 방식은 코드의 가독성을 높이고, 반복적인 코드 작성을 피할 수 있게 해줍니다.

## 결론

커링은 자바스크립트의 함수형 프로그래밍에서 중요한 역할을 하는 기술입니다. 함수의 인자를 하나씩 처리하는 방식으로 코드의 재사용성과 가독성을 높이는 데 큰 도움을 줍니다. 커링을 통해 개발자는 보다 모듈화된 코드 작성을 할 수 있고, 복잡한 로직을 간결하게 표현할 수 있습니다.

커링을 이해하고 활용하는 것은 자바스크립트 개발자에게 매우 유용한 능력이므로, 이를 적극적으로 공부하고 적용해보시기를 권장합니다. 

---