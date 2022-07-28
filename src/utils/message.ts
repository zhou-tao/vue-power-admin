/*
 * @Author: zhoutao
 * @Date: 2021-01-25 15:34:15
 * @LastEditors: zhoutao
 * @LastEditTime: 2021-03-30 13:58:54
 * @Description: 错误码提示
 */
import { ErrorCodeEnum } from '@/enums/httpEnum'
import { MessageKey, useMessage } from '@/hooks/web/useMessage'

// 后端逻辑错误码展示格式（B+xxx）
export type ErrorCode_B = `${ErrorCodeEnum.B}${number}`

/**
 * @description: 错误码消息提示
 * @param {ERR_CODE} code
 * @param {String} msg
 */
export const alertErrMsg: (
  code: ErrorCodeEnum | ErrorCode_B,
  msg: UnDefable<string>,
  key?: MessageKey
) => void = (
  code = ErrorCodeEnum.C100,
  msg = '无异常',
  key = MessageKey.LOADING_KEY
) => {
  const { createMessage } = useMessage()
  createMessage.error({
    key,
    duration: 3,
    content: `ERROR CODE ${code}: ${msg}`
  })
}
