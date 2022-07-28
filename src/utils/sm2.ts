import { sm2 } from 'sm-crypto'

import config from '@/config'

const { publicKey, privateKey, appKey, cipherMode } = config.SM2

export const encrypt: (data: string) => string = data => {
  return `04${sm2.doEncrypt(data, publicKey, cipherMode)}`
}

export const decrypt = (encryptData: string) => {
  // 去除开头'04'
  return sm2.doDecrypt(encryptData.slice(2), privateKey, cipherMode)
}

export const signature = (data: string) => {
  return sm2.doSignature(data, privateKey, { hash: true, der: true })
}

export const getHttpSign: (encryptData: string, timestamp: number) => string = (
  encryptData,
  timestamp
) => {
  return signature(
    `${privateKey}appKey=${appKey}&data=${encryptData}&timestamp=${timestamp}${privateKey}`
  )
}
