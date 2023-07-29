import { createApp } from 'vue'
import { registerGlobComp } from '@c/register'
import App from './App.vue'
import { setupI18n } from '@/locales'
import { setupStore } from '@/store'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupDirective } from '@/directives'
import 'uno:components.css'
import 'uno.css'
import '@/styles/common/index.scss'
import 'uno:utilities.css'

const app = createApp(App)

// 配置国际化
setupI18n(app)

// 注册全局组件或样式引入
registerGlobComp(app)

// 配置 store
setupStore(app)

// 配置路由
setupRouter(app)

// 配置路由守卫
setupRouterGuard(router)

// 配置全局指令
setupDirective(app)

app.mount('#app')
