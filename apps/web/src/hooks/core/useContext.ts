import {
  inject,
  InjectionKey,
  provide,
  reactive,
  readonly as defineReadonly,
  UnwrapRef
} from 'vue'

interface ContextOptions {
  readonly?: boolean
  native?: boolean
}

type ShallowUnwrap<T> = {
  [P in keyof T]: UnwrapRef<T[P]>
}

export function createContext<T>(
  key: InjectionKey<T> = Symbol(),
  context: any,
  options: ContextOptions = {}
) {
  const { readonly = true, native = false } = options
  const state = reactive(context)
  const provideData = readonly ? defineReadonly(state) : state
  provide(key, native ? context : provideData)
}

export function useContext<T>(
  key: InjectionKey<T> = Symbol(),
  defaultValue?: any
): ShallowUnwrap<T> {
  return inject(key, defaultValue || {})
}
