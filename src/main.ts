import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import '@/styles/index.less'
import 'virtual:windi-utilities.css'
import App from './App.vue'
import { createApp } from 'vue'
import { registerGlobComp } from '@c/register'
import { setupStore } from '@/store'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'

const app = createApp(App)

// 注册全局组件或样式引入
registerGlobComp(app)

// 配置 store
setupStore(app)

// 配置路由
setupRouter(app)

// 配置路由守卫
setupRouterGuard(router)

app.mount('#app')
