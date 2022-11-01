import type { LoginParams, LoginResultModel } from './model'
import { ContentTypeEnum } from '@/enums/httpEnum'
import { AuthTypeEnum, GrantTypeEnum, TokenTypeEnum } from '@/enums/authEnum'
import { useCookie } from '@/hooks/web/useCookie'
import { useFetch } from '@/utils/http'
import config from '@/config'

enum Api {
  Auth = '/oauth/token'
}

const createAuthHeader = () => {
  const { client_id, client_secret } = config.OAUTH
  return {
    'content-type': ContentTypeEnum.JSON,
    Authorization: `${AuthTypeEnum.BASIC} ${window.btoa(
      `${client_id}:${client_secret}`
    )}`
  }
}

export const loginApi = (data: LoginParams) => {
  return useFetch.POST<LoginResultModel>({
    url: Api.Auth,
    headers: createAuthHeader(),
    withToken: false,
    data: {
      ...data,
      grant_type: GrantTypeEnum.PASSWORD
    }
  })
}

export const tokenRefresh = () => {
  return useFetch.POST<LoginResultModel>({
    url: Api.Auth,
    headers: createAuthHeader(),
    withToken: false,
    data: {
      refresh_token: useCookie(TokenTypeEnum.REFRESH_TOKEN),
      grant_type: GrantTypeEnum.REFRESH_TOKEN
    }
  })
}
