<script setup lang="ts" name="AppHeader">
  import ThemeSwitch from '@c/ThemeSwitch/index.vue'
  import { useUserStore } from '@/store/modules/user'
  import { isSupported, isFullScreen, toggleFullScreen, autoRemoveListener } from '@/hooks/web/useFullScreen'

  const userStore = useUserStore()
  autoRemoveListener()
</script>

<template>
  <div h="full" flex items="center" justify="end" gap="6">
    <span v-if="isSupported" cursor="pointer" leading="none" @click="toggleFullScreen">
      <i-ri-fullscreen-fill v-show="!isFullScreen" />
      <i-ri-fullscreen-exit-fill v-show="isFullScreen" />
    </span>
    <el-dropdown>
      <el-badge is-dot leading="none">
        <i-ep-bell-filled cursor="pointer" text="base" />
      </el-badge>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            您收到一条临时紧急加班通知 ！！
          </el-dropdown-item>
          <el-dropdown-item
            divided
          >
            You received a temporary overtime notice!!
          </el-dropdown-item>
          <el-dropdown-item
            divided
          >
            臨時の緊急残業の通知を受け取りました!!
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown>
      <i-app-locale cursor="pointer" text="xl" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            中文简体
          </el-dropdown-item>
          <el-dropdown-item
            divided
          >
            English
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <ThemeSwitch />
    <div class="avatar" cursor="pointer">
      <el-dropdown>
        <span flex items="center">
          <i-emoji-chicken :style="{ fontSize: '28px' }" />
          <span text="18px #dfe6e9" ml="2">{{ userStore.username }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <i-ep-lock />修改密码
            </el-dropdown-item>
            <el-dropdown-item
              divided
              @click="$router.replace('/login?redirect=logout')"
            >
              <i-ep-switch-button />
              注销登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
