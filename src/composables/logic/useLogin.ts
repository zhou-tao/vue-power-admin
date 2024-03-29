import type { LoginParams, LoginResultModel } from '@/api/_auth/model'
import { useUserStore } from '@/store/modules/user'

type LoginResult = [success: boolean, data?: LoginResultModel]

export async function useLoginByPassword(
  loginForm: LoginParams
): Promise<LoginResult> {
  const userStore = useUserStore()
  try {
    const data = await userStore.login(loginForm)
    return [true, data]
  }
  catch {
    return [false]
  }
}
