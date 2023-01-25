<script setup lang="ts" name="Sidebar">
  import config from '@/config'

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<template>
  <div h="full" overflow="hidden" p-x-3 bg="white" dark:bg="#222338" shadow-card-dark>
    <div my-3 flex justify="center" items="center">
      <i-app-logo text="3xl" />
      <h1 text="xl dtl" ml="2" font="bold mono" dark:text="white">
        {{ config.APP.title }}
      </h1>
    </div>
    <el-menu
      border-r="0"
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <i-ep-menu />
        <span>仪表盘</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i-ep-user-filled />
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i-ri-admin-fill />
        <span>权限管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i-ri-apps-fill />
        <span>菜单管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i-ep-tools />
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.el-menu-item) {
    @apply h-52px text-dtm dark:text-dts rounded-lg;

    .icon {
      @apply m-r-3 text-base;
    }

    &:hover {
      @apply bg-transparent text-primary;
    }

    &::before {
      @apply absolute w-full h-full content-none bg-transparent rounded-r-lg -translate-x-263px transition-base;
    }

    &.is-active {
      @apply bg-primary text-white;

      &::before {
        @apply bg-primary;
      }
    }
  }
</style>
