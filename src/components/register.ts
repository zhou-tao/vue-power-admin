import type { App } from 'vue'

// auto import failed to ElNotification
import { ElNotification } from 'element-plus'

// element dark theme style
import 'element-plus/theme-chalk/src/dark/css-vars.scss'

// 使用element-plus 自动导入需要手动引入message、loading 样式
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/el-message-box.css'

export function registerGlobComp(app: App) {
  app.use(ElNotification)
  console.log('register all component in there', app)
}
