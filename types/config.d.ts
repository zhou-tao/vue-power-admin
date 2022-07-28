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
  excute: boolean
  client_id: string
  client_secret: string
}

export interface Sm2 {
  publicKey: string
  privateKey: string
  appKey: string
  cipherMode: CipherMode
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
  SM2: Sm2
  MAP?: {
    AMap?: Map
    BMap?: Map
  }
}
