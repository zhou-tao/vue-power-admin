<script setup lang="ts" name="AppHeader">
  import ThemeSwitch from '@c/ThemeSwitch/index.vue'
  import { useUserStore } from '@/store/modules/user'

  const userStore = useUserStore()
</script>

<template>
  <div h="full" flex items="center" justify="end" gap="6">
    <ThemeSwitch />
    <div class="avatar" cursor="pointer">
      <el-dropdown>
        <span class="el-dropdown-link" flex items="center">
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

<style lang="scss" scoped></style>
