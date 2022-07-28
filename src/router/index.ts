import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 禁止路由尾部斜线
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

//重置路由
export const resetRouter = () => {}

export function setupRouter(app: App<Element>) {
  app.use(router)
}
