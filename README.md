# 로그인/회원가입 기능 구현(유서경)

## 프로젝트 파일 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜GlobalStyleComponent.js // styled-compoenent global style 초기화
 ┃ ┣ 📜SignForm.js
 ┃ ┣ 📜SignToggleBtn.js
 ┃ ┗ 📜TextInput.js
 ┣ 📂routes                    // 라우팅되는 페이지
 ┃ ┣ 📜Home.js
 ┃ ┗ 📜TodoScreen.js
 ┣ 📂utils
 ┃ ┣ 📜auth-fn.js              // 로그인 api 관련 로직
 ┃ ┣ 📜constants.js            // 문자열 등 상수 관리
 ┃ ┗ 📜local-storage-fn.js     // local storage 관련 로직
 ┣ 📜App.js                    // 라우팅 관리
 ┣ 📜index.js
 ┗ 📜theme.js
```

## 구현 기능

- `/` : 이메일, 비밀번호, 제출 입력창 ✅
- 로그인 <=> 회원가입 이동 ✅

### Assignment1 이메일/비밀번호 유효성 검사

- 이메일 조건: @ 포함 ✅
- 비밀번호 조건: 8자 이상 ✅
- 조건 만족 시에만 버튼 활성화 ✅

### Assignment2 로그인 구현

- 로그인 API 호출: 올바른 응답 시 `/todo`로 이동 ✅
- 로그인 성공 시 Response Body의 JWT를 로컬 스토리지에 저장 ✅

### Assignment3 로그인 여부 > 리다이렉트 처리

- 로컬 스토리지에 토큰이 있는 상태로 `/` 접속 => `/todo` 로 리다이렉트 ✅
- 로컬 스토리지에 토큰이 없는 상태로 `/todo`접속 => `/` 로 리다이렉트 ✅

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
