# Where Is My Hometown 🏠

![readme-logo](https://github.com/ukssss/clinical-trial-search/assets/86929961/4b324661-ff36-4c7c-8685-b3b8afe905eb)

## 프로젝트 소개

- 주제 : **"내가 살만한 동네는 어디일까?"** 라는 주제로 시작된 **동네 추천** 웹 애플리케이션 프로젝트
- 개발 기간 : 2023.10.02 - 2023.10.17
- 배포 URL : [배포 URL 바로가기](https://d73klmvqn1x8b.cloudfront.net)

</br>

## 기술 스택

**Front**

![axios](https://img.shields.io/badge/axios-6.15.0-5A29E4?logo=axios) ![next.js](https://img.shields.io/badge/next.js-latest-000000?logo=next.js) ![react](https://img.shields.io/badge/react-latest-61DAFB?logo=react) ![javascript](https://img.shields.io/badge/javascript-ES6-F7DF1E?logo=javascript) ![react-hook-form](https://img.shields.io/badge/react--hook--form-7.47.0-EC5990?logo=reacthookform) ![react-daum-postcode](https://img.shields.io/badge/react--daum--postcode-3.1.3-608DF9?logo=reactdaumpostcode) ![react-kakao-maps-sdk](https://img.shields.io/badge/react--kakao--maps--sdk-1.1.21-FEE501?logo=reactkakaomapssdk)  ![styled-components](https://img.shields.io/badge/styled--components-6.0.7-DB7093?logo=styledcomponents) 

**Back, Database**

![synctree](https://img.shields.io/badge/synctree-03AE79?logo=synctree)

**Deploy**

![amazon s3](https://img.shields.io/badge/amazon--s3-000000?logo=amazons3) ![amazon cloudfront](https://img.shields.io/badge/amazon--cloud--front-000000?logo=amazoncloudwatch)

</br>

## 설치 및 실행

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

</br>

## 폴더 구조

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

</br>

## 레이아웃

| 초기 로딩화면 |
| ---------- |
|![초기화면](https://github.com/beomgye/where-is-my-hometown/assets/109938280/5bf7ec4a-101e-491b-b19f-e5f50be09224) |

| 자산 입력 단계 | 
| ---------- |
|![자산입력](https://github.com/beomgye/where-is-my-hometown/assets/109938280/bb6edd5b-4a85-4446-9b17-cef2518b95f1)|

| 지도선택 단계 |
| ---------- |
|![위치선택](https://github.com/beomgye/where-is-my-hometown/assets/109938280/dc953c49-b647-416e-87ea-662646f4f0a7)|


| 거래형식 및 결과화면 |
| -------------- |
| ![마무리단계확인](https://github.com/beomgye/where-is-my-hometown/assets/109938280/d7c15b80-34a5-4d0b-9306-9cd4b271092e) |

| AI가 추천해주는 결과 |
| --------------- |
| ![ChatGP결과](https://github.com/beomgye/where-is-my-hometown/assets/109938280/9a9e4a58-19c5-49ad-b2d7-bb8a823278ac) |

</br>

## 기능 구현

### react-hook-form 활용
각 페이지 별 여러개의 form을 하나로 합쳐 불필요한 렌더링 문제를 막고자하여 이에 관한 방법을 찾던 중, react-hook-form을 사용하여 여러 개의 form을 하나로 컨트롤 하여 불필요한 렌더링 문제를 해결하였다.

useForm을 사용해 하나의 form을 만들어주고, 이에 사용할 수 있는 control, watch, handleSubmit, reset을 컴포넌트에 전달하여 하나의 form을 공유할 수 있도록 제작하였다.

```jsx
// OptionContainer.jsx

import { useForm } from 'react-hook-form';

const OptionContainer = () => {
  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      assets: '',
      location: '주소를 입력해주세요.'
    }
  });

  return (
    <>
      {isLoading && <Loading />}
      {step === 0 && <AssetInputForm control={control} onSubmit={handleSubmit(onSubmit)} />}
      {step === 1 && (
        <LocationForm
          control={control}
          setBcode={setBcode}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={decreaseStep}
        />
      )}

      ...

      {step === 5 && result ? <SelectInfo townList={result} onRefreshButton={onReset} /> : ''}
    </>
  );
};

export default OptionContainer;

```

자산 입력 창에서 react-hook-form에 입력값을 전달하는 코드

```jsx
// AssetInputForm.jsx

const AssetInputForm = ({ control, ...props }) => {
  return (
    <Form
      title="자산 입력"
      description="갖고 있는 자산을 입력해 주세요."
      navbarProps={{
        current: 0,
        stepOptions: StepOptions
      }}
      buttonText="다음 단계"
      {...props}
    >
      <Container>
        <Controller
          name="assets"
          control={control}
          rules={defaultInputRule}
          render={({ field, fieldState: { error } }) => (
            <InputField
              id="assets"
              label="자산"
              placeholder="자산을 입력해 주세요."
              error={error?.message}
              ref={field.ref}
              value={formatMoney(field.value)}
              onChange={(newValue) => {
                field.onChange(newValue);
              }}
              {...field}
            />
          )}
        />
      </Container>
    </Form>
  );
};
```

react-hook-form 을 사용하여 단계별로 옵션을 선택하면 다음과 같이 하나의 form에 담긴 모습을 볼 수 있었다.

![data](https://github.com/beomgye/where-is-my-hometown/assets/86929961/fcf5c423-7215-48e8-aff0-698a5e618ee6)

### Daum 우편번호 서비스를 활용한 위치 검색 기능

[Daum 우편번호 서비스](https://postcode.map.daum.net/guide)를 활용하여 원하는 주소를 검색할 수 있게 만들었으며, 검색 결과값을 통해 [Kakao Map]()에 위치값 좌표를 나타내고, 이에 bcode를 

### Axios 통신을 통한 백엔드 서버와의 연결

내용

### 제목

내용

## 커밋 컨벤션

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
