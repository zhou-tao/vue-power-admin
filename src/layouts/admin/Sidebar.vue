<script setup lang="ts" name="Sidebar">
  import config from '@/config'
  import { isCollapse } from '@/hooks/setting/useCollapse'

  const route = useRoute()
  console.log(route.matched)
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
      router
      :collapse="isCollapse"
      :default-active="route.path"
    >
      <el-menu-item index="/admin/dashboard">
        <i-ep-menu />
        <template #title>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/admin/user">
        <i-ep-user-filled />
        <template #title>
          <span>用户管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/admin/role">
        <i-ri-admin-fill />
        <template #title>
          <span>权限管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/admin/menu">
        <i-ri-apps-fill />
        <template #title>
          <span>菜单管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/admin/setting">
        <i-ep-tools />
        <template #title>
          <span>系统设置</span>
        </template>
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
        padding: 0 !important;

        &:hover {
          @apply text-regular;
        }

        .el-menu-tooltip__trigger  {
          @apply p-0;
        }

        .icon {
          @apply my-0 mx-auto text-base;
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
