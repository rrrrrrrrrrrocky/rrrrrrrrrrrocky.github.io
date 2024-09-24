---
uuid: "theopinionateddev_beforeafter-image-slider-with-nextjs-27a9"
title: "Next.js를 활용한 Before/After 이미지 슬라이더 구현하기"
createdAt: "2024-09-24 10:35:06"
tags: ["tutorial", "react", "nextjs", "frontend"]
description: "Next.js를 활용한 Before/After 이미지 슬라이더 구현 튜토리얼! 간단한 코드를 통해 두 이미지 비교 기능을 구현하고, 더 나은 사용자 경험을 제공하세요."
---

# Next.js를 활용한 Before/After 이미지 슬라이더 구현하기

이번 튜토리얼에서는 웹사이트에서 자주 볼 수 있는 비교 슬라이더 또는 Before/After 슬라이더를 다시 만들어보겠습니다. 이 슬라이더는 두 개의 이미지를 겹쳐서 보여주고 사용자가 슬라이더를 이동시켜 한 이미지를 드러내거나 가리는 기능을 제공합니다.

우리는 새로운 Next.js 앱을 시작하고, 홈페이지를 업데이트하여 다음과 같은 코드를 추가할 것입니다:

```typescript
// src/app/page.tsx

import { Slider } from "./components/Slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Slider />
    </main>
  );
}
```

이제 주요 기능을 구현해보겠습니다. 먼저, 새로운 파일을 생성하여 `Slider` 컴포넌트를 만들 것입니다. 이 컴포넌트에는 항상 `before` 이미지와 `after` 이미지가 함께 표시됩니다.

이 효과를 구현하기 위해, 우리는 `image A`의 전체 중 첫 50%를 보여주고, `image B`의 마지막 50%를 보여주어야 합니다. 이 작업을 마치면 중간에 버튼을 추가하고 이를 드래그할 수 있게 만듭니다. 드래그하는 동안 버튼의 현재 위치를 가져와야 하며, 이를 기반으로 `image A`와 `image B`의 숨기거나 드러내어야 할 부분의 크기를 설정합니다.

위의 설명에 따라 코드는 다음과 같이 보일 것입니다:

```typescript
import Image from "next/image";
import { useState } from "react";

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full relative" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <Image
          alt=""
          fill
          draggable={false}
          priority
          src="https://images.unsplash.com/photo-1523435324848-a7a613898152?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1769&amp;q=80"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt=""
            src="https://images.unsplash.com/photo-1598875791852-8bb153e713f0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2010&amp;q=80"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};
```

위 코드에서는 `onMouseDown` 및 `onMouseMove` 핸들러가 드래그 중일 때만 이미지 비율을 변경하도록 설정되어 있습니다. `handleMove` 함수에서는 드래그하는 위치를 가져오고, 그에 따라 새 위치를 계산하여 `sliderPosition` 상태에 설정합니다.

이후에는 JSX에서 `sliderPosition`을 사용하여 이미지를 표시하고 `sliderPosition/%`를 잘라내거나 표시합니다.

이 글이 도움이 되었기를 바라며, 궁금한 점이 있으면 언제든지 댓글을 남겨주세요. 완성된 코드가 포함된 Github 저장소는 [여기](https://github.theopinionateddev.com/?repo=comparison-slider)에서 확인할 수 있습니다.
