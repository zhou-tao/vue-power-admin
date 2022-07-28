import type { App } from 'vue'
import { Layout, Button, Input, Checkbox, Form } from 'ant-design-vue'

export const registerGlobComp = (app: App) => {
  app.use(Layout).use(Button).use(Input).use(Checkbox).use(Form)
}
