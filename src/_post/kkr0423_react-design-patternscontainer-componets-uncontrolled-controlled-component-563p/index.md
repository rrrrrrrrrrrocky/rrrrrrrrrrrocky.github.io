---
uuid: "kkr0423_react-design-patternscontainer-componets-uncontrolled-controlled-component-563p"
title: "React에서의 Controlled와 Uncontrolled 컴포넌트 이해하기"
createdAt: "2024-09-24 10:53:07"
tags: ["webDev", "javascript", "react", "frontEnd"]
description: "React 컴포넌트 관리의 핵심! Controlled와 Uncontrolled 컴포넌트를 완벽히 이해하고 성능과 유지 보수성을 높이는 방법을 알아보세요."
---

## 소개

React는 컴포넌트 기반의 라이브러리로, 사용자 인터페이스를 구축하는 데 필수적인 도구로 자리잡고 있습니다. 이날 소개할 주제는 React에서 사용하는 두 가지 주요 컴포넌트 디자인 패턴, 즉 Controlled Components(제어된 컴포넌트)와 Uncontrolled Components(비제어 컴포넌트)입니다. 이 두 패턴은 각각의 필요와 워크플로우에 따라 다양한 상황에서 사용할 수 있으며, 올바른 패턴을 선택하는 것은 애플리케이션의 성능과 유지관리 편의성에 큰 영향을 미칠 수 있습니다.

## 배경 및 필요성

React의 컴포넌트를 설계하는 과정에서 사용자 입력 관리 방식은 매우 중요합니다. 비즈니스 애플리케이션에서는 사용자 데이터 입력이 빈번하게 발생하고, 이에 맞춰 데이터 흐름 관리가 필수적입니다. Controlled Components는 React 상태를 통해 데이터를 관리하므로 앱의 상태가 그대로 UI와 동기화됩니다. 반면, Uncontrolled Components는 DOM 요소의 상태를 직접 관리하기 때문에 React의 상태 관리 유연성을 일부 상실하지만 때로는 성능상의 이점을 제공합니다.

우리는 두 접근 방식의 차이점을 명확히 이해하고 적절한 상황에서 그 강점을 활용할 수 있어야 합니다. 예를 들어, 간단한 입력 폼에서는 Uncontrolled Components가 더 효율적일 수 있으며, 복잡한 폼 검증 로직을 필요로 하는 경우 Controlled Components가 더 적합할 수 있습니다.

## 핵심 내용

### Controlled Component

Controlled Component는 React의 상태(state)를 이용해 입력 값을 관리합니다. 이 패턴에서는 폼의 각 입력 요소의 값이 React의 state에 저장되며, 사용자의 입력이 발생할 때마다 onChange 이벤트를 통해 상태가 업데이트됩니다.

```javascript
import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (name.length < 1) {
      setErrorMessage("이름은 비어있을 수 없습니다.");
    } else {
      setErrorMessage("");
    }
  }, [name]);

  return (
    <form>
      {errorMessage && <p>{errorMessage}</p>}
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">제출</button>
    </form>
  );
};
```

위 코드에서는 useState 훅을 사용하여 이름과 나이를 상태로 관리합니다. 사용자가 입력할 때마다 상태가 업데이트되며, 이를 통해 실시간 검증 메시지를 표시할 수 있습니다. Controlled Components는 다음과 같은 장점을 가지고 있습니다:

- **정확한 데이터 흐름:** 모든 데이터는 React의 state를 통해 관리되므로, 해당 데이터를 쉽게 추적하고 관리할 수 있습니다.
- **우수한 유지 보수성:** 상태 관리가 통합되어 있어 코드가 더 직관적이며 유지보수가 용이합니다.

### Uncontrolled Component

Uncontrolled Component는 React의 관리 없이 DOM 요소가 상태를 직접 유지합니다. 이 방식은 주로 refs를 사용하여 DOM 요소에 직접 접근할 때 사용됩니다.

```javascript
import React from "react";

export const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const SubmitForm = (e) => {
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={SubmitForm}>
      <input name="name" type="text" placeholder="이름" ref={nameInputRef} />
      <input name="age" type="number" placeholder="나이" ref={ageInputRef} />
      <input type="submit" value="제출" />
    </form>
  );
};
```

위의 UncontrolledForm에서는 사용자 입력을 refs를 통해 DOM에서 직접 가져옵니다. 이러한 접근 방식은 다음과 같은 특징이 있습니다:

- **빠른 구현:** 간단한 폼의 경우, state 관리 없이 직접 DOM 요소에 접근할 수 있게 하여 코드를 더 간단하게 만듭니다.
- **성능:** 간단하고 상대적으로 적은 상태 업데이트가 필요한 애플리케이션에서는 약간의 성능 상 이점을 제공할 수 있습니다.

## 예시

- **Controlled Component 사용 사례:** 복잡한 입력 폼이나 실시간 검증이 필요한 응용 프로그램에서 Controlled Component가 효과적입니다. 예를 들어, 사용자가 입력한 이름이 데이터베이스에 이미 존재하는지 실시간으로 확인하는 서비스에서는 Controlled Component가 필수입니다.

- **Uncontrolled Component 사용 사례:** 파일 업로드나 단순한 입력 폼 등, 데이터 관리가 복잡하지 않은 경우에는 Uncontrolled Component가 적합할 수 있습니다. 예를 들어, 사용자가 첨부파일을 업로드하는 경우, 파일 업로드 상태를 관리할 필요가 없으므로 직접 DOM을 이용하는 것이 더 간편할 수 있습니다.

결론적으로, Controlled Components와 Uncontrolled Components를 이해하고 적절하게 활용하는 것은 React 애플리케이션의 품질과 사용자 경험을 향상시키는 데 큰 도움이 됩니다. 각 패턴의 장단점을 충분히 이해하고, 프로젝트에 맞는 최적의 선택을 하여 개발을 진행해 보시기 바랍니다.
