<script setup lang="ts" name="Login">
  import { reactive } from 'vue'
  import { LoginParams } from '@/api/_auth/model'
  import { useMessage, MessageKey } from '@/hooks/web/useMessage'
  import { useUserStore } from '@/store/modules/user'
  import config from '@/config'

  const { createMessage } = useMessage()

  const loginForm = reactive<LoginParams>({
    username: '',
    password: '',
    rememberMe: false
  })
  const loginRules = {
    username: [{ required: true, message: '请输入登录账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }]
  }
  let loginStatus = $ref<boolean>(false)

  async function doLogin(value: LoginParams) {
    const userStore = useUserStore()
    try {
      loginStatus = true
      createMessage.loading({
        duration: 0,
        content: '正在登录',
        key: MessageKey.LOADING_KEY
      })
      await userStore.login(value)
      createMessage.success({
        content: '登录成功',
        key: MessageKey.LOADING_KEY
      })
    } finally {
      loginStatus = false
    }
  }
</script>

<template>
  <div class="relative h-screen p-3/25">
    <div class="login-bg"></div>
    <div class="w-480px animate-animated animate-fadeInLeft">
      <h2 class="text-2xl font-bold text-[#788fac] m-0 -2xl:text-22px">
        welcome to login
      </h2>
      <h1 class="text-40px font-bold text-[#103059] m-0 mt-3 -2xl:text-36px">
        {{ config.APP.title }}
      </h1>
      <div class="mt-16 flex flex-col -2xl:mt-11">
        <a-form
          layout="vertical"
          :model="loginForm"
          :rules="loginRules"
          @finish="doLogin"
        >
          <a-form-item name="username" label="账号">
            <a-input
              v-model:value="loginForm.username"
              placeholder="请输入账号"
            />
          </a-form-item>
          <a-form-item
            name="password"
            label="密码"
            :style="{ marginTop: '38px' }"
          >
            <a-input-password
              v-model:value="loginForm.password"
              placeholder="请输入密码"
            />
          </a-form-item>
          <a-form-item>
            <div
              class="w-360px flex justify-between items-center text-[#a5adc7] text-13px"
            >
              <a-checkbox v-model="loginForm.rememberMe">记住密码</a-checkbox>
              <span
                class="cursor-pointer"
                @click="() => createMessage.warn('敬请期待!')"
                >忘记密码？</span
              >
            </div>
          </a-form-item>
          <a-form-item :style="{ marginTop: '50px' }">
            <a-button type="primary" :loading="loginStatus" html-type="submit"
              >登录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .login-bg {
    animation: fade-in 0.8s ease-in-out;
    .bg-img-full('@/assets/images/login-bg.png');
    @apply fixed left-0 right-0 top-0 bottom-0;
  }

  @text-color: #a5adc7;

  :deep(.ant-form) {
    .ant-form-item {
      @apply mb-0;
    }

    .ant-checkbox-wrapper {
      @apply text-13px font-normal text-[@text-color];

      .ant-checkbox-inner {
        @apply border border-solid border-[@text-color] rounded-1/2;
      }

      .ant-checkbox-checked::after {
        @apply rounded-1/2;
      }
    }

    label {
      @apply text-base font-semibold;
    }

    .ant-form-item-label > label {
      @apply text-[#7289a7];
    }

    .login-input-style {
      @apply w-360px bg-transparent text-base text-black border-none rounded-none outline-none focus:(shadow-none) !important;
    }

    .ant-input {
      .login-input-style();

      border-bottom: solid 1px #e6e6f0 !important;
    }

    .ant-input-affix-wrapper {
      .login-input-style();

      border-bottom: solid 1px #e6e6f0 !important;

      .ant-input {
        .login-input-style();
      }

      &.ant-input-affix-wrapper-focused {
        box-shadow: none;
      }
    }

    .ant-btn {
      @apply w-40 h-11 text-base rounded-3xl;
    }
  }
</style>
