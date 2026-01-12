# 프로젝트 파일 구조

화이트라벨 템플릿으로 재구성된 현재 파일 구성을 한눈에 볼 수 있도록 정리했습니다.

## 루트 맵

```
Haneul2025.github.io/
├─ index.html
├─ pages/
│  ├─ loading.html
│  └─ result.html
├─ design/
│  ├─ index.js               # 토큰→CSS 변수로 주입, 테마 스위칭 훅 제공
│  ├─ tokens.js              # colors/typography/spacing/radius/shadow/assets 베이스 토큰
│  └─ themes/
│     ├─ default.js          # 기본 테마
│     ├─ brandA.js           # 샘플 테마 A
│     └─ brandB.js           # 샘플 테마 B
├─ assets/
│  ├─ css/
│  │  ├─ main.css            # 공통 스타일(폰트 선언 등)
│  │  └─ pages/
│  │     ├─ main-page.css
│  │     ├─ loading-page.css
│  │     └─ result-page.css
│  ├─ js/
│  │  ├─ utils/
│  │  │  ├─ verse-formatter.js
│  │  │  ├─ verse-selector.js
│  │  │  └─ image-downloader.js
│  │  └─ pages/
│  │     ├─ loading-page.js
│  │     └─ result-page.js
│  ├─ images/
│  │  └─ back.jpg            # 기본 배경 이미지
│  ├─ logos/
│  │  └─ HaneulLogo.png      # 기본 로고
│  └─ fonts/
│     └─ OTF/                # 국립박물관문화재단 클래식 폰트 3종
├─ data.js                   # 4,800+ 성경 구절 데이터
├─ README.md
└─ FILE_STRUCTURE.md
```

## 그룹별 역할

- **HTML**: `index.html`, `pages/*.html` — 화면 뼈대. 디자인은 전부 토큰/테마로 분리됨.
- **Design 시스템**: `design/*` — 디자인 토큰 정의(`tokens.js`), 테마 설정(`themes/*.js`), 런타임 적용(`index.js`).
- **CSS**: `assets/css/**/*` — 모든 색상/폰트/간격/그림자/이미지는 CSS 변수만 참조하도록 정규화됨.
- **JavaScript**: `assets/js/**/*` — 기능 로직(구절 선택, 포맷, 이미지 저장)만 담당. 디자인 변경 없음.
- **Assets**: `assets/images`(배경 등), `assets/logos`(브랜드 로고), `assets/fonts`(OTF 폰트).
- **데이터**: `data.js` — 구절 텍스트와 출처만 포함, 스타일 정보 없음.

## 변경 지침(화이트라벨 관점)

- 브랜드 교체 시 수정 파일은 **`design/themes/*`**와 **`assets/logos|images`** 폴더로 한정.
- 컴포넌트/기능 JS는 손대지 않고, 테마 파일 교체만으로 색상·폰트·로고·배경이 전역 변경됨.
- Favicon과 카드 로고도 `design/index.js`에서 토큰 기반으로 동기화되므로 HTML을 수정할 필요가 없음.
