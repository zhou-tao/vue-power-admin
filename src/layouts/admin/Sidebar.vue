<script setup lang="ts" name="Sidebar">
  import config from '@/config'
  import { isCollapse } from '@/hooks/setting/useCollapse'

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<template>
  <div :style="{ width: isCollapse ? '54px' : '260px' }" h="full" overflow="hidden" box="border" bg="white" dark:bg="#222338" transition-width duration-400 ease-in-out>
    <div h="15" mb-2 flex justify="center" items="center">
      <i-app-logo text="3xl" />
      <h1 v-show="!isCollapse" text="xl regular" ml="2" font="bold mono" whitespace-nowrap>
        {{ config.APP.title }}
      </h1>
    </div>
    <el-menu
      border-r="0"
      default-active="1"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <i-ep-menu />
        <span>首页</span>
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
  :deep(.el-menu) {
    @apply p-x-3;
    .el-menu-item {
      @apply h-12 text-dtm dark:text-dts rounded;
      padding: 0 18px !important;
      .icon {
        @apply m-r-3 text-base;
      }

      &:hover {
        @apply bg-transparent text-primary;
      }

      &::before {
        @apply absolute w-1 h-full content-none bg-transparent rounded-r -left-3 transition-base;
      }

      &.is-active {
        @apply bg-primary text-white;

        &::before {
          @apply bg-primary;
        }
      }
    }

    &.el-menu--collapse {
      @apply p-0 w-full;

      .el-menu-item {
        @apply p-0;

        &:hover {
          @apply text-regular;
        }

        .icon {
          @apply my-0 mx-auto;
        }
        &::before {
          @apply left-0 rounded-r-none;
        }

        &.is-active {
          @apply text-primary bg-transparent;
        }
      }
    }
  }
</style>
