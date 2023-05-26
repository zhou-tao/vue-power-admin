import type { App } from 'vue'
import { Consoler } from '@/utils/consoler'

// element dark theme style
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import '@/styles/element/index.scss'

// 使用element-plus 自动导入需要手动引入message、loading 样式
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/el-message-box.css'

export function registerGlobComp(app: App) {
  Consoler.SUCCESS('registerGlobComp', app)
}
