export {}

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    title?: string
    icon?: string
    hideMenu?: boolean
    requiresAuth?: boolean
    permission?: string[]
  }
}
