export const useDebounce = (fn: Function, delay: number) => {
  let timeout: TimeoutID = null
  return function (this: unknown, ...args: any) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, args)
      timeout = null
    }, delay)
  }
}

export const useThrottle = (fn: Function, delay: number) => {
  let timeout: TimeoutID = null
  return function (this: unknown, ...args: any) {
    if (timeout) return
    timeout = setTimeout(() => {
      fn.apply(this, args)
      timeout = null
    }, delay)
  }
}
