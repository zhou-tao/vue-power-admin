import type { ObjectDirective } from 'vue'

interface WatermarkerOption {
  text: string
  color?: string
}

export const vWatermark: ObjectDirective<HTMLDivElement, WatermarkerOption> = {
  mounted(el, { value: { text, color } }) {
    printWaterMarker(el, text, color)
    const watermark = el.style.backgroundImage
    const observer = new MutationObserver(([e]) => {
      // @ts-ignore
      if (e.attributeName === 'style' && e.target.style.backgroundImage !== watermark) {
        // 防止样式被F12手动更改，赋值为之前的值
        // @ts-ignore
        el.style = e.oldValue
      }
    })
    observer.observe(el, { childList: true, subtree: true, attributes: true, attributeOldValue: true })
  }
}

function printWaterMarker(el: HTMLDivElement, text: string, color = 'rgba(178, 190, 195, 0.3)') {
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  canvas.width = 140
  canvas.height = 80
  canvas.style.display = 'none'
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = 'rgba(0, 0, 0, 0)'
  ctx.fillRect(0, 0, 140, 80)
  ctx.font = '24px serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.translate(70, 40)
  ctx.rotate(-30 * Math.PI / 180)
  ctx.fillStyle = color
  ctx.fillText(text, 0, 0)
  const image = canvas.toDataURL('image/png')
  el.style.backgroundImage = `url(${image})`
  document.body.removeChild(canvas)
}
