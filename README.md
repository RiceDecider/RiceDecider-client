<div align="center">
  <img src="https://github.com/ncb6206/bob-eat-client/assets/62326659/8c8ade97-e434-4916-acac-e8ab6b3015a4" />
  <br />
  <h2>위치를 기반으로 식사 메뉴와 주변 식당을 추천하는 모바일 웹서비스</h2>
  <p> 사용자의 식사 목적에 따른 질문을 통해 위치 기반 식사 메뉴와 주변 식당을 추천하며, <br/> 이를 통해 식사 결정에 대한 고민을 해결해주는 서비스입니다. <p/>
</div>

- [**`배포링크`**](https://rice-decider.vercel.app/)

<br/>

## 📌 기능 목록

### 소셜 로그인

| 데모영상    | 
| -------------- | 
| <img width=600 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/8ba061c0-58cd-4715-a2c8-a5758ee1ca21"/> |

- **네이버 소셜 로그인 도입** : 사용자 편의성 향상을 위해, 네이버 소셜 로그인 기능을 도입하였습니다. `네이버로 계속하기` 버튼을 클릭하면, 네이버의 로그인 페이지로 이동하도록 구현하였습니다. <br><br>
- **인가 코드 처리** : 사용자가 밥정너의 회원이 아니라면 회원가입 페이지로, 회원이라면 네이버에서 제공하는 인가 코드를 받아오도록 설정하였습니다. 이 인가 코드는 백엔드에 전달되어 처리됩니다. <br><br>
- **토큰 저장 및 라우팅** : 소셜 로그인이 성공적으로 완료되면, 백엔드에서 발급받은 토큰들을 사용자의 쿠키에 저장합니다. 이후, 사용자는 홈 카테고리 화면으로 자동 라우팅되도록 구현하였습니다. <br><br>

### 홈 카테고리 선택

| 데모영상    | 
| -------------- | 
| <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/3f382d2b-8651-4d52-8f52-211050e5bd8d"/> |

- **카테고리 구성 및 선택 제한** : 카테고리 구성은 아이콘과 버튼명을 통합한 형태로 설계하였으며, 사용자가 한 번에 하나의 카테고리만을 선택할 수 있도록 제한하여 다중 선택이 불가능하게 만들었습니다. <br><br>
- **액션 버튼의 비활성화와 활성화** : 카테고리를 선택하지 않았을 때는 액션 버튼을 비활성화 상태로 표시하여 사용자의 조작을 제한해 카테고리 선택의 필요성을 알리도록 하였습니다. <br><br>
- **다이나믹 라우팅 구현** : 카테고리가 선택되면 액션 버튼이 활성화되며, 이 버튼을 클릭하면 선택한 카테고리 목록이 포함된 질문 선택 화면으로 다이나믹 라우팅하는 로직을 구현하였습니다. <br><br>

### 질문 선택

| 데모영상    | 
| -------------- | 
| <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/54100e35-cbd2-477f-a2a1-595382042fd7"/> |

- **백버튼 기능 및 진행률 표시** : 백버튼을 클릭하면 카테고리 선택 화면으로 이동하며, 질문의 진행률은 프로그래스 바 형태로 제공하여 사용자에게 진행 상황을 명확하게 알립니다. 또한, 각 질문에 대해 건너뛰기 버튼을 제공하여 사용자가 원할 경우 질문을 스킵할 수 있도록 하였습니다. <br><br>
- **답변 선택 및 액션 버튼 활성화** : 각 질문에 대해 여러개의 답변 옵션을 제공하고, 사용자가 단일 선택만 가능하도록 하였습니다. 답변이 선택되면 `골랐어요!` 라는 액션 버튼이 활성화 되며, 이를 클릭하면 다음 질문이 제공됩니다. <br><br>
- **최종 선택 후 결과보기** :  최종 질문에 답변을 완료하면 `골랐어요!` 라는 액션 버튼이 `밥정너 결과보기`라는 문구로 변경되며, 해당 버튼을 클릭하면 주변 식당 추천 모달창이 표시되도록 구현하였습니다. <br><br>
- **식당 추천 및 다이나믹 라우팅** : 주변 식당 추천 모달창에서 싫어요 버튼을 클릭하면 요청이 취소되며, 좋아요 버튼을 클릭하면 선택한 카테고리와 답변에 따른 태그, 현재 위치들을 종합하여 식당 추천 화면으로 다이나믹 라우팅이 되도록 하였습니다.

### 식당 추천 결과

| 데모영상    | 
| -------------- | 
| <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/87a0872e-f289-4896-a8c7-29acb1277334"/> <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/cca62858-1637-4f95-b778-e7f9697ffa69"/> |

- **식당 정보 제공** : 다이나믹 라우팅으로 전달받은 카테고리와 태그, 현재 위치를 네이버 검색 API에 적용하여 최대 4개의 식당 정보를 제공해주도록 하였습니다. <br> 각 식당의 정보에는 해당 식당의 이미지, 이름, 카테고리, 그리고 현재 위치부터 식당까지의 거리 정보를 포함하여 사용자에게 제공하여 줍니다. <br><br>
- **식당 목록 표시 방식과 검색결과 없음 대응** : 추천 식당 목록은 스와이프 형태와 리스트 형태 두 가지를 제공하여, 사용자가 선호하는 형태로 선택하여 볼 수 있도록 구현하였습니다. <br> 만약 검색 결과가 없을 경우, 검색 결과가 없음을 알려주는 결과창을 표시하고, 태그 없이 카테고리만을 이용한 검색 기능을 제공하여 사용자의 편의성을 높였습니다. <br><br>
- **다이나믹 라우팅을 이용한 식당 상세정보 화면 이동** : 추천 식당 목록에서 식당 이름을 클릭하면, 해당 식당의 이름을 가진 식당 상세 정보 화면으로 다이나믹 라우팅되도록 구현하였습니다. <br><br>
- **스크랩 기능 활성화** : 로그인한 사용자를 대상으로 스크랩 버튼을 활성화하여, 추천 식당 목록 중 원하는 식당을 스크랩할 수 있도록 구현하였습니다. <br><br>

### 식당 상세 정보

| 데모영상    | 
| -------------- | 
| <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/08f64b26-38ca-4c13-9b28-99f21ba64329"/> <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/3788d2ce-d299-402c-b9e8-ee0b088dac1f"/> |

- **네이버 검색 API 활용 및 식당 정보 제공** : 다이나믹 라우팅을 통해 전달받은 식당 이름을 네이버 검색 API에 적용하여, 해당 식당의 이미지, 이름, 카테고리, 주소, 그리고 도로명 주소 정보를 사용자에게 제공하도록 구현하였습니다. <br><br>
- **네이버 지도 연동** : `식당보러가기` 라는 버튼을 제공하여, 클릭 시 네이버 지도와 연동되도록 하였습니다. 이를 통해 사용자는 네이버 지도에서 해당 식당의 보다 상세한 정보를 확인할 수 있습니다.  <br><br>
- **스크랩 기능 활성화** : 로그인한 사용자를 대상으로 스크랩 버튼을 활성화하여, 해당 식당을 스크랩할 수 있도록 구현하였습니다.

### 스크랩 리스트

| 데모영상    | 
| -------------- | 
| <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/7e1f4da0-2d8a-4ccd-83fe-dbf2e1d4264d"/> <img width=400 height=800 src="https://github.com/ncb6206/natest-shop/assets/62326659/91750058-201d-4c60-a099-0753e8531dfc"/> |

- **로그인 상태에 따른 라우팅 조정** : 사용자의 로그인 여부를 체크하고, 로그인이 되어있지 않은 경우 로그인 모달 창을 보여주도록 하였습니다. 반면 로그인 상태인 경우에는 사용자를 스크랩 화면으로 자동 라우팅하도록 구현하였습니다. <br><br>
- **스크랩 관리 기능** : 사용자는 자신이 스크랩한 리스트를 확인할 수 있습니다. 또한, 하트 아이콘을 클릭하면 삭제 팝업이 나타나고, 이를 통해 원하는 스크랩을 쉽게 취소할 수 있도록 하였습니다.  <br><br>

<br>

## 📌 개발 환경 설정

```bash
$ npm install
$ npm run dev
```

<br/>

## 📌 기술 스택 & 사용 라이브러리

|구분| 스택 & 라이브러리|
|--|--|
|언어| <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">|
|메인 라이브러리|<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">|
|기타 라이브러리|<img alt="Static Badge" src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black"> <img alt="Static Badge" src="https://img.shields.io/badge/Axios-%235A29E4?style=for-the-badge&logo=axios"> <img src="https://img.shields.io/badge/justand-2359C6?style=for-the-badge&logo=justand"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge"> 
|패키지 관리|<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm"> |
|배포| <img src="https://img.shields.io/badge/vercel-232F3E?style=for-the-badge&logo=vercel&logoColor=white">

## 📌 컨벤션

> 폴더 구조 관리

- src > 디렉토리는 소문자로 명명 (components, pages 등)
- src > 디렉토리 > 디렉토리(파스칼 case) > 컴포넌트명(파스칼 case).tsx 사용

- ex: src > components > Layout > Layout.tsx

<br>

> 커밋 컨벤션

- 커밋 구분은 아래 블럭의 용도에 맞게 사용하여 해당 커밋의 작업을 파악할 수 있도록 합니다.
- 커밋 구분을 제외한 내용은 한글로 작성하여 직관적으로 커밋의 변경사항을 파악할 수 있도록 합니다.

```
Init : 초기 세팅
Feat : 기능 (새로운 기능)
Fix : 버그 (버그 수정)
Design : CSS 등 사용자 UI 디자인 변경
Style : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
Refactor: 리팩토링
Comment : 필요한 주석 추가 및 변경
Docs : 문서 (문서 추가, 수정, 삭제)
Test : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
Chore : 기타 변경사항 (빌드 스크립트, 패키지 매니저 설정 수정 등)
Rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove : 파일을 삭제하는 작업만 수행한 경우
!HOTFIX : 급하게 치명적인 버그를 고쳐야하는 경우
!BREAKING CHANGE : CHANGE 커다란 API 변경의 경우
```

## 📌 ETC

비사이드 포텐데이의 사이드 프로젝트에 참여하여, 기획자, 디자이너, 백엔드 및 프론트엔드 개발자로 이루어진 팀에서 함께 프로젝트를 개발하고, 서비스를 성공적으로 배포하였습니다.

- [**`포텐데이 링크`**](https://bside.best/projects/detail/P231031201240)
