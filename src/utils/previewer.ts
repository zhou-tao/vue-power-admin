// 图片预览器
import 'viewerjs/dist/viewer.css'
import Viewer from 'viewerjs'

export default class Previewer {
  private instance: Viewer

  constructor(el: HTMLElement) {
    const viewer = new Viewer(el)
    this.instance = viewer
  }

  getInstance() {
    return this.instance
  }

  setOptions(opts: Record<string, any>) {
    Viewer.setDefaults(opts)
  }
}
