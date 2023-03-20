import { LocalStorageEnum } from '@/enums/storageEnum'

export const setLocalStorage = (key: LocalStorageEnum, value: any) => {
  localStorage[key] = value
}

export const getLocalStorage = (key: LocalStorageEnum) => {
  return localStorage[key]
}
