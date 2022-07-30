import type { TokenTypeEnum } from '@/enums/authEnum'
import type { CookieAttributes } from 'js-cookie'
import Cookie from 'js-cookie'
import { isJsonString } from '@/utils/is'

// 可自行扩展更多 enmu类型
type CookieKey = TokenTypeEnum

export function createCookie(
  key: CookieKey,
  value: string,
  options?: CookieAttributes
) {
  Cookie.set(key, value, options)
}

export function removeCookies(keys: CookieKey[] = []) {
  keys.forEach(key => {
    Cookie.remove(key)
  })
}

export function useCookie<T = string>(key: CookieKey): UnDefable<T> {
  const value = Cookie.get(key)
  if (typeof value === 'undefined') {
    return undefined
  } else if (isJsonString(value)) {
    return JSON.parse(value as string) as T
  } else {
    return value as unknown as T
  }
}
