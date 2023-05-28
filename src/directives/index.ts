import type { App, ObjectDirective } from 'vue'
import { vPermission } from './permission'

const GlobalDirectives: Record<string, ObjectDirective<HTMLElement, any>> = {
  permission: vPermission
  // more...
}

export function setupDirective(app: App) {
  for (const directiveName in GlobalDirectives) {
    app.directive(directiveName, GlobalDirectives[directiveName])
  }
}
