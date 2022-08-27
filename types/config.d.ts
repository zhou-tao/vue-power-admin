import type { ThemeEnum } from '@/enums/appEnum'

export interface App {
  title: string
  theme: ThemeEnum
  copyright: boolean
  security: boolean
}

export interface Http {
  timeout: number
}

export interface Oauth {
  execute: boolean
  client_id: string
  client_secret: string
}

export interface Map {
  key: string
  src: string
  glSrc?: string
}

export interface AppConfig {
  APP: App
  HTTP: Http
  OAUTH: Oauth
  MAP?: {
    AMap?: Map
    BMap?: Map
  }
}
