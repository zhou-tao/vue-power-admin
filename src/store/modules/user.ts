import type { LoginParams, LoginResultModel } from '@/api/_auth/model'
import type { UserInfoModel } from '@/api/_system/model/userModel'
import { loginApi, tokenRefresh } from '@/api/_auth'
import { checkPassword } from '@/utils/regex'
import { createCookie, removeCookies } from '@h/web/useCookie'
import { TokenTypeEnum } from '@/enums/authEnum'
import { defineStore } from 'pinia'
import { getAccountInfo } from '@/api/_system/user'
import { router } from '@/router'

interface UserState extends UserInfoModel {
  security: boolean
}

function setTokenHelper({
  access_token,
  refresh_token,
  expires_in
}: LoginResultModel) {
  createCookie(TokenTypeEnum.ACCESS_TOKEN, access_token, {
    expires: expires_in / (24 * 60 * 60 - 10)
  })
  createCookie(TokenTypeEnum.REFRESH_TOKEN, refresh_token)
}

const initialUserState = {
  id: 0,
  name: '',
  userId: -1,
  username: '知音',
  enabled: true,
  deptCode: '',
  deptName: '',
  mobile: '',
  posts: [],
  roles: [],
  security: true //密码安全性
}

export const useUserStore = defineStore('user', {
  state: (): UserState => initialUserState,
  getters: {
    invalid: state => state.userId === -1
  },
  actions: {
    async login({
      username,
      password
    }: LoginParams): Promise<LoginResultModel> {
      const data = await loginApi({ username, password })
      setTokenHelper(data)
      this.security = checkPassword(password)
      await this.setUserInfo()
      return data
    },

    async reLogin(): Promise<LoginResultModel> {
      const data = await tokenRefresh()
      setTokenHelper(data)
      await this.setUserInfo()
      return data
    },

    async setUserInfo() {
      const accountInfo = await getAccountInfo()
      this.$patch(accountInfo)
    },

    logout(redirectUrl?: string) {
      this.$reset()
      removeCookies([TokenTypeEnum.ACCESS_TOKEN, TokenTypeEnum.REFRESH_TOKEN])
      router.replace(`/login?redirect=${redirectUrl}`)
    }
  },
  persist: {
    key: 'USER_STORE',
    storage: window.sessionStorage
  }
})
