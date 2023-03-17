import type { App, ObjectDirective } from 'vue'
import { reactive } from 'vue'
import Guide from '@/components/Guide/src/Guide.vue'

interface GuideOption {
  order: number
  title: string
  description: string
  placement?: string
}

interface GuideValue {
  el: HTMLElement,
  title: string
  description: string
  placement?: string
}

interface GuideDom {
  [key: number]: GuideValue
}

const GUIDE_KEY = Symbol('guide-key')

const GUIDE_ID = '__tour_guide'

const globalGuideDoms = reactive<GuideDom>({})

const vGuide: ObjectDirective<HTMLElement, GuideOption> = {
  mounted(el, { value: { order, title, description, placement } }) {
    globalGuideDoms[order] = {
      title,
      description,
      placement,
      el: markRaw(el)
    }
    let guideDom = document.getElementById(GUIDE_ID) as HTMLDivElement & {
      __vGuide__APP_instance?: App
    }
    if(!guideDom) {
      guideDom = document.createElement('div')
      guideDom.id = GUIDE_ID
      document.body.append(guideDom)
      // @ts-ignore
      const app = createApp(Guide)
      app.provide(GUIDE_KEY, globalGuideDoms)
      app.mount(guideDom)
    }
  }
}

export default vGuide

export {
  GUIDE_KEY
}

export type {
  GuideValue,
  GuideDom
}
