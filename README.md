# Where Is My Hometown 🏠

![readme-logo](https://github.com/ukssss/clinical-trial-search/assets/86929961/4b324661-ff36-4c7c-8685-b3b8afe905eb)

### 프로젝트 소개

- 주제 : **"내가 살만한 동네는 어디일까?"** 라는 주제로 시작된 **동네 추천** 웹 애플리케이션 프로젝트
- 개발 기간 : 2023.10.02 - 2023.10.17
- 배포 URL : [배포 URL 바로가기](https://d73klmvqn1x8b.cloudfront.net)

### 기술 스택

**Front**

![axios](https://img.shields.io/badge/axios-6.15.0-5A29E4?logo=axios) ![next.js](https://img.shields.io/badge/next.js-latest-000000?logo=next.js) ![react](https://img.shields.io/badge/react-latest-61DAFB?logo=react) ![javascript](https://img.shields.io/badge/javascript-ES6-F7DF1E?logo=javascript) ![react-hook-form](https://img.shields.io/badge/react--hook--form-7.47.0-EC5990?logo=reacthookform) ![react-daum-postcode](https://img.shields.io/badge/react--daum--postcode-3.1.3-608DF9?logo=reactdaumpostcode) ![react-kakao-maps-sdk](https://img.shields.io/badge/react--kakao--maps--sdk-1.1.21-FEE501?logo=reactkakaomapssdk)  ![styled-components](https://img.shields.io/badge/styled--components-6.0.7-DB7093?logo=styledcomponents) 

**Back, Database**

![synctree](https://img.shields.io/badge/synctree-03AE79?logo=synctree)

**Deploy**

![amazon s3](https://img.shields.io/badge/amazon--s3-000000?logo=amazons3) ![amazon cloudfront](https://img.shields.io/badge/amazon--cloud--front-000000?logo=amazoncloudwatch)


### 설치 및 실행

1. 저장소 복제 (Clone Repository)

```zsh
$ git clone https://github.com/beomgye/where-is-my-hometown.git
```

2. 종속성 설치 (Install Dependencies)

```zsh
$ npm install
```

3. 애플리케이션 실행 (Run Application)

```zsh
$ npm run dev
```

### 폴더 구조

```base
src
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ Address
 ┃ ┃ ┣ Button
 ┃ ┃ ┣ Container
 ┃ ┃ ┣ Form
 ┃ ┃ ┣ Header
 ┃ ┃ ┣ InputField
 ┃ ┃ ┣ Loading
 ┃ ┃ ┣ NavBar
 ┃ ┃ ┗ Radio
 ┃ ┣ screens
 ┃ ┃ ┣ AssetInputForm
 ┃ ┃ ┣ BuildingTypeForm
 ┃ ┃ ┣ LocationForm
 ┃ ┃ ┣ SelectInfo
 ┃ ┃ ┣ SplashScreen
 ┃ ┃ ┣ SummaryForm
 ┃ ┃ ┗ TransactionTypeForm
 ┃ ┗ index.js
 ┣ constants
 ┃ ┗ index.js
 ┣ containers
 ┃ ┗ OptionContainer
 ┣ hooks
 ┃ ┣ useFindMyHome.js
 ┃ ┗ useStepControl.js
 ┣ pages
 ┃ ┣ api
 ┃ ┃ ┗ hello.js
 ┃ ┣ _app.jsx
 ┃ ┣ _document.jsx
 ┃ ┗ index.jsx
 ┣ styles
 ┃ ┣ global.js
 ┃ ┗ variables.js
 ┗ utils
   ┣ customStyles.js
   ┗ formatMoney.js

```

### 실행 결과

| 초기 로딩화면 |
| ---------- |
|![초기화면](https://github.com/beomgye/where-is-my-hometown/assets/109938280/5bf7ec4a-101e-491b-b19f-e5f50be09224) |


| 지도선택 단계 |
| ---------- |
|![지도선택](https://github.com/beomgye/where-is-my-hometown/assets/109938280/cf8a6014-8246-45a3-8b39-4568b3e76c16)|


| 거래형식 및 결과화면 |
| -------------- |
| ![마무리단계](https://github.com/beomgye/where-is-my-hometown/assets/109938280/7b7d2aa8-d770-4fab-b6b9-4d36722cfc50) |

| AI가 추천해주는 결과 |
| --------------- |
| ![ChatGP결과](https://github.com/beomgye/where-is-my-hometown/assets/109938280/9a9e4a58-19c5-49ad-b2d7-bb8a823278ac) |


### 커밋 컨벤션

```base
- Feat | 새로운 기능을 추가
- Fix | 버그 수정
- Design | CSS 등 사용자 UI 디자인 변경
- !BREAKING CHANGE | 커다란 API 변경의 경우
- !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우
- Style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- Refactor | 프로덕션 코드 리팩토링
- Comment | 필요한 주석 추가 및 변경
- Docs | 문서 수정
- Test | 테스트 코드, 리팩토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음
- Chore | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음
- Rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- Remove | 파일을 삭제하는 작업만 수행한 경우
```
