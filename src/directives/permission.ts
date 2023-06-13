import type { ObjectDirective } from 'vue'
import type { ButtonEnum } from '@/enums/permissionEnum'

export const vPermission: ObjectDirective<HTMLElement, any> = {
  created (el, { arg, instance }) {
    const permissions = (instance?.$route?.meta?.permissions || []) as ButtonEnum[]
    const noPermission = !permissions.includes(arg as ButtonEnum)
    if (noPermission) {
      el.style.display = 'none'
    }
  }
}
