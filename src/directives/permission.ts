import type { ObjectDirective } from 'vue'
// import { ButtonEnum } from '@/enums/permissionEnum'

export const vPermission: ObjectDirective<HTMLElement, any> = {
  created (el, { arg }, vnode) {
    // @ts-ignore
    const { permissions } = vnode.ctx.appContext.app._instance.appContext.config.globalProperties.$route.meta
    const noPermission = !permissions.includes(arg)
    if (noPermission) {
      el.style.display = 'none'
    }
  }
}
