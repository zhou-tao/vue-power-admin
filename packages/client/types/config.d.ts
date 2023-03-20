export interface App {
  title: string
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

export interface AppConfig {
  APP: App
  HTTP: Http
  OAUTH: Oauth
}
