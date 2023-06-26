import { ErrorCodeEnum } from '@/enums/httpEnum'
import { useUserStore } from '@/store/modules/user'
import { alertErrMsg } from '@/utils/message'

export const ErrorMsgMap = new Map<ErrorCodeEnum, string>([
  [ErrorCodeEnum.A100, '客户端请求错误!'],
  [ErrorCodeEnum.A200, '网络请求超时(Axios timeout)!'],
  [ErrorCodeEnum.H400, '请求参数不匹配！'],
  [ErrorCodeEnum.H401, '未登录或token已超时！'],
  [ErrorCodeEnum.H403, '权限不足!'],
  [ErrorCodeEnum.H404, '网络请求错误,未找到该资源!'],
  [ErrorCodeEnum.H405, '网络请求错误,未找到该资源!'],
  [ErrorCodeEnum.H408, '网络请求超时!'],
  [ErrorCodeEnum.H500, '服务器错误,请联系管理员!'],
  [ErrorCodeEnum.H502, '网络错误!'],
  [ErrorCodeEnum.H504, '网络超时!'],
  [ErrorCodeEnum.H505, 'HTTP版本不支持!']
])

const checkStatus: (status: number, msg: string, isCancel?: boolean) => void = (
  status,
  msg,
  isCancel = false
) => {
  if (!status) {
    const isAxiosTimeout = msg === ErrorMsgMap.get(ErrorCodeEnum.A200)
    if (isAxiosTimeout) {
      alertErrMsg(ErrorCodeEnum.A200, msg)
    } else {
      // 被 AxiosCanceler取消的请求不需要提示
      !isCancel &&
        alertErrMsg(ErrorCodeEnum.A100, ErrorMsgMap.get(ErrorCodeEnum.A100))
    }
    // 被 axios取消的请求：1.多次重复点击被 AxiosCanceler取消 2. 超时被自动取消 3. 其他未知 axios错误
    console.error('The request was cancelled by axios!')
    return
  }
  switch (status) {
    case 400:
      alertErrMsg(ErrorCodeEnum.H400, msg)
      break
    case 401:
      alertErrMsg(ErrorCodeEnum.H401, ErrorMsgMap.get(ErrorCodeEnum.H401))
      useUserStore().logout('expires_token')
      break
    case 403:
      alertErrMsg(ErrorCodeEnum.H403, ErrorMsgMap.get(ErrorCodeEnum.H403))
      break
    case 404:
      alertErrMsg(ErrorCodeEnum.H404, ErrorMsgMap.get(ErrorCodeEnum.H404))
      break
    case 500:
      alertErrMsg(ErrorCodeEnum.H500, ErrorMsgMap.get(ErrorCodeEnum.H500))
      break
    default:
      alertErrMsg(ErrorCodeEnum.H500, '未知错误, 请联系管理员')
  }
}

export default checkStatus
