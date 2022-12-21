# 로그인/회원가입 기능 구현(유서경)

## 프로젝트 파일 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂todoScreen
 ┃ ┃ ┣ 📂todo
 ┃ ┃ ┃ ┣ 📜Todo.js              // Todo 컴포넌트
 ┃ ┃ ┃ ┣ 📜TodoBtns.js
 ┃ ┃ ┃ ┣ 📜TodoContents.js
 ┃ ┃ ┃ ┣ 📜TodoReviseOff.js
 ┃ ┃ ┃ ┗ 📜TodoReviseOn.js
 ┃ ┃ ┣ 📜TodoForm.js            // 새로운 Todo 추가를 관리하는 form
 ┃ ┃ ┗ 📜TodoList.js
 ┃ ┣ 📜GlobalStyleComponent.js  // styled-compoenent global style 초기화
 ┃ ┣ 📜SignForm.js
 ┃ ┣ 📜SignToggleBtn.js
 ┃ ┗ 📜TextInput.js
 ┣ 📂routes                     // 라우팅되는 페이지
 ┃ ┣ 📜Home.js
 ┃ ┗ 📜TodoScreen.js
 ┣ 📂utils
 ┃ ┣ 📜auth-fn.js              // 로그인 api 관련 로직
 ┃ ┣ 📜constants.js            // 문자열 등 상수 관리
 ┃ ┗ 📜local-storage-fn.js     // local storage 관련 로직
 ┃ ┗ 📜todo-fn.js
 ┣ 📜App.js                    // 라우팅 관리
 ┣ 📜index.js
 ┗ 📜theme.js
```

## Assignment 별 구현 기능

- `/` : 이메일, 비밀번호, 제출 입력창 ✅
- 로그인 <=> 회원가입 이동 ✅

### Assignment1 이메일/비밀번호 유효성 검사

#### 구현 기능

- 이메일 조건: @ 포함 ✅
- 비밀번호 조건: 8자 이상 ✅
- 조건 만족 시에만 버튼 활성화 ✅

#### 구현 코드

**SignForm: 로그인/회원가입 데이터 로직을 관리하는 컴포넌트**

- sumbit event 및 form data 관리
- `TextInput` 컴포넌트를 분리하여 `SignForm` 내에서 재사용함

![image](https://user-images.githubusercontent.com/79842380/208824042-7ce93fc7-f850-4a1d-81a5-76d009a4b98e.png)

**TextInput: input UI 및 유효성 검증하는 컴포넌트**

- 유효성 조건을 `input tag`의 `attribute`로 전달: `type`, `minLength`,`required`

![image](https://user-images.githubusercontent.com/79842380/208824530-c6577d09-a0f6-459f-a819-80a1c03c1b07.png)

#### 구현 데모

![Dec-21-2022 13-46-58](https://user-images.githubusercontent.com/79842380/208823773-663173c2-8e6a-4c23-929f-ff6b9b347836.gif)

### Assignment2 로그인 구현

#### 구현 기능

- 로그인 API 호출: 올바른 응답 시 `/todo`로 이동 ✅
- 로그인 성공 시 Response Body의 JWT를 로컬 스토리지에 저장 ✅

#### 구현 코드

**postAuth: 로그인/회원가입 API에 요청을 처리하는 함수**

- `signState`: 사용자의 회원가입/로그인 여부에 대한 상태

![image](https://user-images.githubusercontent.com/79842380/208825382-3ae87015-1213-46ec-bff5-9f7b562ae3ae.png)

**handlePostResponse: 로그인/회원가입 API의 응답을 처리하는 함수**

- `setMsg`: 응답 결과를 사용자에게 출력
- `saveUserToken`: 토큰을 로컬 스토리지에 저장

![image](https://user-images.githubusercontent.com/79842380/208825793-e4270b93-e9c7-4834-b48c-fbe654ead798.png)

#### 구현 데모

![Dec-21-2022 14-13-53](https://user-images.githubusercontent.com/79842380/208826846-22f77278-ddd9-40cf-b413-58d44c7cfb1b.gif)

### Assignment3 로그인 여부 > 리다이렉트 처리

#### 구현 기능

- 로컬 스토리지에 토큰이 있는 상태로 `/` 접속 => `/todo` 로 리다이렉트 ✅
- 로컬 스토리지에 토큰이 없는 상태로 `/todo`접속 => `/` 로 리다이렉트 ✅

#### 구현 코드

**`/` `/todo`의 스크린 컴포넌트 최초 마운트 시 토큰 저장 여부를 판단하여 리다이렉트**

![image](https://user-images.githubusercontent.com/79842380/208827430-5c9bf77b-a126-4354-ab12-c7b848341943.png)

**isLocalStorageHasToken: 로컬 스토리지에 토큰이 있는지 확인하는 함수**

![image](https://user-images.githubusercontent.com/79842380/208827389-d7e8a760-fd42-4962-8111-d8bd3f1bb2c4.png)

#### 구현 데모

![home_redirection](https://user-images.githubusercontent.com/79842380/206915056-0b3525e4-638f-46ac-84ff-117129bd3a47.gif)
[로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트]

![todo_redirection](https://user-images.githubusercontent.com/79842380/206915107-0966aeeb-68b2-47b1-9320-da401960948e.gif)
[로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트]

### Assignment4 투두 리스트 CREATE & READ

#### 구현 기능

- getTodos: `/todo` 경로에서 투두 리스트 목록 확인 ✅
  - 투두 내용과 완료여부 표시 ✅
- createTodo: 입력창과 추가 버튼 ✅
  - 추가 버튼을 클릭하면 새로운 투두 리스트 추가 ✅

#### 구현 코드

**TodoScreen: `/todo` 경로의 컴포넌트**

- `todos`에 API로부터 받아온 todos를 저장함
- `todos` 배열이 비어있는 경우 대안 메시지 출력

![image](https://user-images.githubusercontent.com/79842380/208939342-e982eb79-3dbe-4dd3-943d-d370291b9169.png)

**getTodos: API에서 todo 데이터를 가져오는 함수**

![image](https://user-images.githubusercontent.com/79842380/208939439-bde6caa3-6aba-45cf-a3f6-75eae3dd1df7.png)

**TodoList: `todos`를 출력하는 컴포넌트**

- 최신 todo부터 출력하기 위해 `[...todos].reverse()` 로 새로운 배열 생성

![image](https://user-images.githubusercontent.com/79842380/208940018-27808e46-de4f-4418-a4ed-971b192dd4a9.png)

**TodoForm: 새로운 todo를 생성하는 컴포넌트**

- 최신 todo부터 출력하기 위해 `[...todos].reverse()` 로 새로운 배열 생성

![image](https://user-images.githubusercontent.com/79842380/208940611-f70f2ef2-b128-40a8-9833-ae635f6e4e56.png)

### Assignment5 투두 리스트 UPDATE & DELETE

#### 구현 기능

- updateTodo: 개별 아이템 우측에 수정 버튼 > 클릭 시 수정모드 활성화 ✅
  - 수정모드: 개별 아이템 우측에 제출/취소 버튼 ✅
- deleteTodo: 개별 아이템 우측에 삭제버튼 > 클릭시 투두 리스트 삭제 ✅

#### 구현 코드

**Todo: 단일 todo 컴포넌트**

- 불리언 `revise` state를 기준으로 `TodoReviseOff`나 `TodoReviseOn`을 출력
- `complete` state를 사용하여 체크박스 상태 관리

![image](https://user-images.githubusercontent.com/79842380/208940823-7f86bab2-6dd4-425c-8173-e8ee551ed766.png)

**TodoReviseOn: 단일 todo 컴포넌트의 `revise = true`일 때 출력되는 컴포넌트**

- 버튼 클릭시 콜백 함수를 props으로 전달

![image](https://user-images.githubusercontent.com/79842380/208941304-753bed5b-c6be-4928-a48c-9052cb2192e0.png)

#### Assignment4-5: 투두 리스트 CRUD 데모

![todo_screen](https://user-images.githubusercontent.com/79842380/206914985-e05fd664-85c1-44e7-93e4-ddf49c596b74.gif)

# Team 7 컨벤션

## 커밋 컨벤션

```
Feat: 새로운 기능에 대한 커밋
Fix: build 빌드 관련 파일 수정에 대한 커밋
Build: 빌드 관련 파일 수정에 대한 커밋
Chore: 그 외 자잘한 수정에 대한 커밋, 패키지 설정
Ci: CI 관련 설정 수정에 대한 커밋
Docs: 문서 수정에 대한 커밋
Style: 코드 스타일 혹은 포맷 등에 관한 커밋
Refactor: 코드 리팩토링에 대한 커밋
Test: 테스트 코드 수정에 대한 커밋
```

## 라이브러리

- axios
- react-router-dom
- styled-component
  - 컴포넌트 파일 내에서 하단에 두고 사용
