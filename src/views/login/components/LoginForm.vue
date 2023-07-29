<script setup lang="ts" name="LoginForm">
  import { reactive } from 'vue'
  import { useMessage } from '@h/web/useMessage'
  import { useLoginByPassword } from '@h/logic/useLogin'
  import type { FormInstance, FormRules } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import type { LoginParams } from '@/api/_auth/model'
  import config from '@/config'

  const { t } = useI18n()
  const router = useRouter()
  const showVerifyDialog = ref(false)
  const { $notify, $message } = useMessage()
  const loginForm = reactive<LoginParams>({
    username: '',
    password: '',
    rememberMe: false
  })
  const loginFormRef = ref<FormInstance>()
  const loginRules = reactive<FormRules>({
    username: [{ required: true, message: t('home.usernameRule'), trigger: 'blur' }],
    password: [{ required: true, message: t('home.passwordRule'), trigger: 'blur' }]
  })
  const loading = ref<boolean>(false)

  async function doLogin(formEl: FormInstance | undefined) {
    if (!formEl) return
    await formEl.validate(async (valid) => {
      if (!valid) return false
      loading.value = true
      const [success] = await useLoginByPassword(loginForm)
      loading.value = false
      if (success) {
        showVerifyDialog.value = true
      }
      else {
        $message.error('账户名不存在或密码错误！')
      }
    })
  }

  function handleVerifyChange(success: boolean) {
    if (!success) return
    $message.success({
      message: '登录成功'
    })
    router.push('/home')
    $notify({
      title: 'Welcome',
      message: t('home.welcome'),
      type: 'success'
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
            v-model="loginForm.username"
            size="large"
            :placeholder="`${$t('home.account')} admin`"
          />
        </el-form-item>
        <el-form-item prop="password" :style="{ marginTop: '38px' }">
          <el-input
            v-model="loginForm.password"
            type="password"
            size="large"
            :placeholder="`${$t('home.password')} 123456`"
            show-password
            @keyup.enter="doLogin(loginFormRef)"
          />
        </el-form-item>
        <el-form-item>
          <div w="360px" flex="center" justify="between">
            <el-checkbox v-model="loginForm.rememberMe">
              {{ $t('home.remember') }}
            </el-checkbox>
            <span
              text="sm primary"
              cursor="pointer"
            >
              {{ $t('home.forgot') }}
            </span>
          </div>
        </el-form-item>
        <el-form-item :style="{ marginTop: '36px' }">
          <el-button
            auto-insert-space
            w="full"
            size="large"
            type="primary"
            :loading="loading"
            class="login-btn"
            @click="doLogin(loginFormRef)"
          >
            {{ $t('home.login') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="divider">
      <div>{{ $t('home.moreLoginType') }}</div>
    </div>
    <div flex="center" text="1.3rem placeholder">
      <div i-ri-github-fill class="link" />
      <div i-ri-wechat-fill class="link" />
      <div i-ri-twitter-fill class="link" />
      <div i-ri-google-fill class="link" text="1.2rem!" />
    </div>
    <VerifyDialog v-model="showVerifyDialog" @change="handleVerifyChange" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-form) {
  .el-input__wrapper, .el-checkbox__inner {
    @apply bg-transparent;

    &::after {
      @apply b-primary;
    }
  }

  .el-checkbox__label {
    @apply font-normal;
  }
}

.divider {
  @apply flex-center my-4;

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
