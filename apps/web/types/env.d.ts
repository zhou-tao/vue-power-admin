/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface ViteEnv {
  VITE_PORT: number
  VITE_PUBLIC_PATH: string
  VITE_BASE_API: string
  VITE_USE_PROXY: boolean
  VITE_PROXY_PREFIX: string[]
  VITE_USE_MOCK: boolean
  VITE_USE_LEGACY: boolean
  VITE_DROP_CONSOLE: boolean
}

declare interface ImportMetaEnv
  extends Readonly<Record<keyof ViteEnv, string>> {
  __: never
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
