# iphone12_clone

## 링크

> 원본: [아이폰12 소개 페이지](https://www.apple.com/kr/iphone-12/key-features/)

> 클론: [netlify 배포 페이지](https://jazzy-platypus-16b497.netlify.app/)

## 기능 및 특징

- 반응형 웹
- 스크롤에 따른 애니메이션(gsap), 각종 트랜지션
- youtube iframe 특정 구간, 자동 반복 
- 컬러 팔레트 선택시 이미지 전환(swiper.js)
- webpack 적용

## css 최적화

`The RED : 견고한 UI 설계를 위한 마크업 가이드 by 정찬명` 강의를 참고 하였습니다.

`img` 요소에 `loading="lazy", decoding="async"` 적용하여 viewport 영역 밖에 있는`img` 요소는 지연 로딩 및 비동기 디코딩을 적용하였습니다.

```
<img loading="lazy" decoding="async" src="./images/logo.png" >
```

해상도 구간별로 css를 작성한 후, `link` 요소의 `media` 속성을 적용해서 데스크탑은 데스크탑 코드만 태블릿은 태블릿 코드만 모바일은 모바일 코드만 렌더링 하도록 하였습니다.

```
<link rel="stylesheet" href="./scss/main.css">
<link rel="stylesheet" href="./scss/tablet.css" media="(max-width: 1023px)">
<link rel="stylesheet" href="./scss/mobile.css" media="(max-width: 768px)">
```

LCP를 줄이기 위해서 히어로 이미지를 `preload` 하였습니다.


```
<link rel="preload" as="image" href="./images/purple_full.jpeg">
```


## 개선점

- gsap 라이브러리를 통해 스크롤 애니메이션 구현을 하였는데, 애니메이션이 뭔가 부드럽지 않은 것 같습니다. 아무래도 애플은 네이티브로 구현한 것 같은데 ...  => 스타벅스 클론에서 배웠던 scroll event에 loadash의 throttle()을 적용해주니 좀 더 부드러워졌습니다. 

- 스크롤에 따른 `video` 요소 제어는 `video` 리소스를 다운로드 받지 못하여서 iframe을 제어하려고 하다가 온갖 오류에 직면하여 결국엔 포기 => `iframe`을 5회만 재생하고 멈추면 `img` 요소로 변경 하였습니다.