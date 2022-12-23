# Team :seven: | TodoList 구현하기 (Week 1)

이 레파지토리는 원티드 프리온보딩 프론트엔드 인턴십 1주차 과제를 위해 만들어졌습니다.

팀원들과 토론해 선발과제의 요구사항별로 Best Practice를 도출해 하나의 프로젝트로 만들었습니다.

## :heavy_check_mark: 팀원 소개

<table>
  <tbody >
    <tr >
      <td align="center"><a href="https://github.com/SeokyoungYou"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/79842380?v=4" width="100px; height="100px" alt=""/><br /><sub><b>유서경 (팀장)</b></a><ul><li>프로젝트 총괄</li><li>Best Practice 토론 총괄 및 과제 배분 </li></sub><br /></td>
      <td align="center"><a href="https://github.com/JiyoonZ"><img style="margin-top: 20px;" src="https://avatars.githubusercontent.com/u/81758576?v=4" width="100px;" alt=""/><br /><sub><b>경지윤</b></sub></a><ul><li>회의록 작성</li><li>Best Practice 토론 총괄 및 과제 배분 </li><br /></td>
      <td align="center"><a href=""><img style="margin-top: 20px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56298540?v=4" width="100px;" alt=""/><br /><sub><b>김수진</b></sub></a><ul><li>리드미 구조 작성 및 배분</li><li>PR merge 담당</li><br /></td>
      <td align="center"><a href="https://github.com/khw970421"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/59253551?v=4" width="100px;" alt=""/><br /><sub><b>김형욱</b></sub></a><ul><li>과제/토론 일정 관리 및 과제 제출</li><li>PR merge 담당</li><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/eternalclash"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/77526745?v=4" width="100px;" alt=""/><br /><sub><b>이수창</b></sub></a><ul><li>CSS theme, constants 파일 총괄</li><li>최종 코드 확인 및 검토</li><br /></td>
      <td align="center"><a href="https://github.com/etoile-j?tab=repositories"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/102905624?v=4" width="100px;" alt=""/><br /><sub><b>임수진</b></sub></a><ul><li>팀/코드 컨벤션 총괄</li><li>최종 코드 배포 및 데모 영상 제작</li><br /></td>
      <td align="center"><a href="https://github.com/ckwlghks123"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/83552466?v=4" width="100px;" alt=""/><br /><sub><b>차지환</b></sub></a><ul><li>프로젝트 기초 세팅 및 폴더/파일 트리 총괄</li><li>최종 코드 확인 및 검토</li><br /></td>
    </tr>
  </tbody>
</table>

## :heavy_check_mark: 사용 라이브러리 및 툴

<div style="float: left;">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/React Router Dom-CA4245?style=for-the-badge&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Husky-808080?style=for-the-badge&logo=husky&logoColor=white">
</div>

<br/>

## :heavy_check_mark: 프로젝트 구조

```

```

## :heavy_check_mark: 과제 요구사항에 따른 Best Practice

꼭 Best Practice로 선정되지 않아도 스스로 공부해보고 싶은 부분을 담당해 코드를 구현했습니다.

### [Assignment1] 이메일과 비밀번호 유효성 검사

#### 📝 유효성 체크 (Best Practice By <span style="background-color: #BFCFFF">유서경</span> )

- 담당자: 이수창

* 선정 이유: HTML의 의미를 살려서(semantic) 사용

```
코드 설명
```

#### 📝 onChange validation 추가 (Best Practice By <span style="background-color: #BFCFFF">김수진</span> )

- 담당자: 차지환
- 선정 이유: HTML의 의미를 살려서(semantic) 사용

```
코드 설명
```

---

### [Assignment2] 로그인 API 호출

#### 📝 로그인/회원가입 API (Best Practice By <span style="background-color: #BFCFFF">이수창</span> )

- 담당자: 유서경
- 선정 이유: Axios middleware 등을 사용한 라이브러리 활용

```
// 이부분은 서경님이 따로 추가할 설명 없으시면 main 브랜치에 있는 내용을 써도 괜찮을 것 같습니다.
```

#### 📝 response handle (Best Practice By <span style="background-color: #BFCFFF">경지윤 & 김형욱</span> )

- 담당자: 경지윤 & 김형욱
- 선정 이유: Status code를 판별하여 분기처리

```
코드 설명
```

---

### [Assignment3] 로그인 여부에 따른 리다이렉트 처리

#### 📝 Form 컴포넌트 (Best Practice By <span style="background-color: #BFCFFF">차지환</span> )

- 담당자: 경지윤
- 선정 이유: 변수값이 변화할 때마다 리렌더링되는 useState 대신 useRef 사용

```
코드 설명
```

#### 📝 컴포넌트 사용 (Best Practice By <span style="background-color: #BFCFFF">경지윤</span> )

- 담당자: 임수진
- 선정 이유: 리다이렉션 등 라우팅 관련 로직을 Router 컴포넌트에 위임

```
코드 설명
```

### [Assignment 4~5] 투두리스트 목록 구현

#### 📝 페이지 CSS (Best Practice By <span style="background-color: #BFCFFF">유서경</span> )

- 담당자: 유서경
- 선정 이유: 과제의 요구사항을 가장 컴팩트하게 보여줄 수 있는 Styling

```
코드 설명
```

#### 📝 TodoList 컴포넌트 (Best Practice By <span style="background-color: #BFCFFF">임수진</span> )

- 담당자: 임수진
- 선정 이유: 사용자 인터페스에 충족한 기능 구현

```
코드 설명
```

#### 📝 TodoItem 컴포넌트 (Best Practice By <span style="background-color: #BFCFFF">임수진</span> )

- 담당자: 김수진
- 선정 이유: 사용자 인터페스에 충족한 기능 구현

```
코드 설명
```

#### 📝 TodoForm 컴포넌트 (Best Practice By <span style="background-color: #BFCFFF">경지윤</span> )

- 담당자: 경지윤
- 선정 이유: 변수값이 변화할 때마다 리렌더링되는 useState 대신 useRef 사용

```
코드 설명
```

#### 📝 Todo CRUD (Best Practice By <span style="background-color: #BFCFFF">이수창</span> )

- 담당자: 이수창, 차지환
- 선정 이유: contextAPI를 사용한 전역 상태 관리

```
코드 설명
```

#### 📝 Todo axios (Best Practice By <span style="background-color: #BFCFFF">김형욱</span> )

- 담당자: 경지윤, 김형욱
- 선정 이유: todoAxios 인스턴스를 생성해서 사용

```js
export const requestTodos = async (method, propsData = {}) => {
  const { id = '', ...userData } = propsData;
  const config = {
    method: method,
    url: `/todos/${id}`,
    data: userData,
  };
  return await todosAxios(config).then((res) => res.data);
};
```

- 필요한 메서드별로 함수를 작성해서 공통되는 부분은 `requestTodos`함수로 처리했습니다.
