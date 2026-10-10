# Figma Make App

React, Vite, Tailwind CSS로 구성된 사용자 테스트용 프로토타입입니다. 패키지 관리는 pnpm을 사용합니다.

## 로컬 작업

```bash
pnpm install
pnpm dev
```

## GitHub Pages 배포

`main` 브랜치에 변경 사항을 푸시하면 `.github/workflows/deploy-pages.yml`이 프로젝트를 빌드하고 GitHub Pages에 자동 배포합니다.

처음 한 번 GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정하세요. 이후 배포 상태와 URL은 저장소의 **Actions** 또는 **Deployments**에서 확인할 수 있습니다.

워크플로는 저장소 이름을 기준으로 Vite의 배포 기본 경로를 자동 설정하므로 프로젝트 Pages와 사용자/조직 Pages를 모두 지원합니다. 필요할 때는 Actions 화면에서 워크플로를 수동 실행할 수도 있습니다.

## 디자인 시스템

UI에는 별도의 컴포넌트 또는 스타일 라이브러리를 추가하지 않습니다. 팀 디자인 시스템의 컴포넌트, 변수, 스타일을 프로젝트 소스로 연결해 사용합니다.
