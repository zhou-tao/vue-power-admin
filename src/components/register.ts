import type { App } from 'vue'
// 使用element-plus 自动导入需要手动引入message、loading 样式
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

export function registerGlobComp(app: App) {
  console.log('register all component in there', app)
}
