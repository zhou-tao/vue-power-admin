import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { VITE_PUBLIC_PATH } from 'vite-env'

import { basicRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory(VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // disabled tail-slash path
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
