<script setup lang="ts" name="Menu">
  import { MenuLayout } from '@/enums/menuEnum'
  import { useSettingStore } from '@/store/modules/setting'

  const props = withDefaults(defineProps<{
    mode: MenuLayout
  }>(), {
    mode: MenuLayout.VERTICAL
  })

  const { menuCollapsed } = $(useSettingStore())
  const route = useRoute()
</script>

<template>
  <div :class="`menu--${props.mode}`">
    <el-menu
      router
      border-r="0"
      :mode="props.mode"
      :collapse="menuCollapsed"
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
  .menu--horizontal {
    @apply flex-1;

    :deep(.el-menu) {
      @apply justify-center;

      &.el-menu--horizontal {
        @apply border-b-0;
      }
    }
  }

  // 顶层无法穿透样式
  .menu--vertical :deep(.el-menu) {
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
