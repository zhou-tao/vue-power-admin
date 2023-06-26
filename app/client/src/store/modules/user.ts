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
  name: 'coder',
  userId: -1,
  username: 'Tooz',
  gender: '1',
  avatar: 'https://avatars.githubusercontent.com/u/36221207?v=4',
  deptCode: '007',
  deptName: '开发部',
  mobile: '18812345678',
  posts: [
    { id: 1, code: 'FRONT-END', name: '前端' },
    { id: 4, code: 'OPEN-SOURCE', name: '开源' }
  ],
  roles: [
    { id: 0, code: 'ADMIN', name: '管理员', menu: [] }
  ],
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
      if (!data) {
        return Promise.reject('login failed!')
      }
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
