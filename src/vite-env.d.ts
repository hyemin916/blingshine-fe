interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string; // 예시
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />
