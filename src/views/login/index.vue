<script setup lang="ts" name="Login">
  import config from '@/config'
  import { LoginParams } from '@/api/_auth/model'
  import { useUserStore } from '@/store/modules/user'
  import { useMessage } from '@/hooks/web/useMessage'
  import type { FormInstance, FormRules } from 'element-plus'

  const { $message } = useMessage()
  const loginForm = reactive<LoginParams>({
    username: '',
    password: '',
    rememberMe: false
  })
  const loginFormRef = ref<FormInstance>()
  const loginRules = reactive<FormRules>({
    username: [{ required: true, message: '请输入登录账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }]
  })
  let loginStatus = $ref<boolean>(false)

  async function doLogin(formEl: FormInstance | undefined) {
    if (!formEl) return
    await formEl.validate(async valid => {
      if (!valid) return false
      const userStore = useUserStore()
      try {
        loginStatus = true
        await userStore.login(loginForm)
        $message.success({
          message: '登录成功'
        })
      } finally {
        loginStatus = false
      }
    })
  }
</script>

<template>
  <div
    w="full"
    h="screen"
    overflow="hidden"
    class="flex justify-around items-center"
  >
    <img min-w="[200px]" w="1/3" src="@/assets/images/login_banner.svg" />
    <div w="[480px]">
      <h2 text="2xl [#788fac]" font="bold" m="0">welcome to login</h2>
      <h1 text="[40px] [#103059] -2xl:text-36px" font="bold" m="0 t-3">
        {{ config.APP.title }}
      </h1>
      <div m="t-16 -2xl:mt-11" flex="~ col">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
          <el-form-item prop="username" label="账号">
            <el-input v-model="loginForm.username" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item
            prop="password"
            label="密码"
            :style="{ marginTop: '38px' }"
          >
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <div
              w="360px"
              text="13px #a5adc7"
              class="flex justify-between items-center"
            >
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
              <span cursor="pointer" @click="$message.info('敬请期待！')"
                >忘记密码？</span
              >
            </div>
          </el-form-item>
          <el-form-item :style="{ marginTop: '50px' }">
            <el-button
              type="primary"
              :loading="loginStatus"
              @click="doLogin(loginFormRef)"
            >
              登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
