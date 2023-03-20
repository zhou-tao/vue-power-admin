export const useDebounce = (fn: Function, delay: number) => {
  let timeout: TimeoutID = null
  return function(...args: any) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args)
      timeout = null
    }, delay)
  }
}

export const useThrottle = (fn: Function, delay: number) => {
  let timeout: TimeoutID = null
  return function(...args: any) {
    if (timeout) return
    timeout = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args)
      timeout = null
    }, delay)
  }
}
