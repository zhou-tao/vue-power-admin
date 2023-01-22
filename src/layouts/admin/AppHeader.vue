<script setup lang="ts" name="AppHeader">
  import ThemeSwitch from '@c/ThemeSwitch/index.vue'
  import { Lock, SwitchButton } from '@element-plus/icons-vue'
  import { useUserStore } from '@/store/modules/user'

  const userStore = useUserStore()
</script>

<template>
  <div h="full" flex items="center" justify="end" gap="6">
    <ThemeSwitch />
    <div class="avatar" cursor="pointer">
      <el-dropdown>
        <span class="el-dropdown-link" flex items="center">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span text="18px #dfe6e9" ml="2">{{ userStore.username }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><Lock /></el-icon>修改密码</el-dropdown-item
            >
            <el-dropdown-item
              divided
              @click="$router.replace('/login?redirect=logout')"
            >
              <el-icon><SwitchButton /></el-icon>
              注销登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
