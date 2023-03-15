<script setup lang="ts" name="LoginForm">
  import { reactive } from 'vue'
  import config from '@/config'
  import { LoginParams } from '@/api/_auth/model'
  import { useMessage } from '@h/web/useMessage'
  // import { useLoginByPassword } from '@h/logic/useLogin'
  import { FormInstance, FormRules } from 'element-plus'
  import { useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const router = useRouter()
  const { $notify } = useMessage()
  const loginForm = reactive<LoginParams>({
    username: '',
    password: '',
    rememberMe: false
  })
  const loginFormRef = $ref<FormInstance>()
  const loginRules = reactive<FormRules>({
    username: [{ required: true, message: t('home.usernameRule'), trigger: 'blur' }],
    password: [{ required: true, message: t('home.passwordRule'), trigger: 'blur' }]
  })
  let loginLoading = $ref<boolean>(false)

  async function doLogin(formEl: FormInstance | undefined) {
    if (!formEl) return
    await formEl.validate(async valid => {
      if (!valid) return false
      // loginLoading = true
      // const [success, data] = await useLoginByPassword(loginForm)
      // console.log(data)
      // loginLoading = false
      // if (success) {
      //   $message.success({
      //     message: '登录成功'
      //   })
      //   router.push('/home')
      // }
      router.push('/home')
      $notify({
        title: 'Welcome',
        message: t('home.welcome'),
        type: 'success',
      })
    })
  }
</script>

<template>
  <div
    w="21rem"
    bg="#ffffff90"
    dark:bg="#22222290"
    px="8"
    py="6"
    rounded-xl
    shadow-xl
  >
    <h1 text="3xl brand-gradient center" font="bold mono" m="t-lg b-0" select-none>
      {{ config.APP.title }}
    </h1>
    <div m="t-12 mt-11" flex="~ col">
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
          <el-input
            size="large"
            v-model="loginForm.username"
            :placeholder="t('home.account')"
          />
        </el-form-item>
        <el-form-item prop="password" :style="{ marginTop: '38px' }">
          <el-input
            v-model="loginForm.password"
            type="password"
            size="large"
            :placeholder="t('home.password')"
            show-password
            @keyup.enter="doLogin(loginFormRef)"
          />
        </el-form-item>
        <el-form-item>
          <div w="360px" flex justify="between" items="center">
            <el-checkbox v-model="loginForm.rememberMe">{{ t('home.remember') }}</el-checkbox>
            <span
              text="sm primary"
              cursor="pointer"
            >
              {{ t('home.forgot') }}
            </span>
          </div>
        </el-form-item>
        <el-form-item :style="{ marginTop: '36px' }">
          <el-button
            auto-insert-space
            w="full"
            size="large"
            type="primary"
            :loading="loginLoading"
            class="login-btn"
            @click="doLogin(loginFormRef)"
          >
            {{ t('home.login') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="divider">
      <div>{{ t('home.moreLoginType') }}</div>
    </div>
    <div center text="1.3rem placeholder">
      <i-ri-github-fill class="link" />
      <i-ri-wechat-fill class="link" />
      <i-ri-twitter-fill class="link" />
      <i-ri-google-fill class="link" text="1.2rem!" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

:deep(.el-form) {
  .el-input__wrapper, .el-checkbox__inner {
    @apply bg-transparent;
  }

  .el-checkbox__label {
    @apply font-normal;
  }
}

.divider {
  @apply flex center my-4;

  div {
    @apply px-3 text-xs text-secondary tracking-1px;
  }

  &::before, &::after {
    @apply content-none flex-1 h-1px bg-[var(--el-border-color)];
  }
}

.link {
  @apply cursor-pointer mx-4 hover:text-regular transition-base;
}
</style>
