import type { ObjectDirective } from 'vue'

interface LazyOption {
  src: string
}

export const vLazy: ObjectDirective<HTMLDivElement, LazyOption> = {
  mounted(el, { value: { src } }) {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.setAttribute('src', src)
        observer.unobserve(e.target)
      }
    })
    observer.observe(el)
  }
}
