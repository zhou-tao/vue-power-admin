<script setup lang="ts" name="Menu">
  import { MenuLayout } from '@/enums/menuEnum'
  import { routeToMenu } from '@h/logic/useMenu'
  import { useSettingStore } from '@/store/modules/setting'
  import { useMenuStore } from '@/store/modules/menu'
  import AdminRoutes from '@/router/routes/modules/admin'
  import MenuItem from './MenuItem.vue'

  const props = withDefaults(defineProps<{
    mode?: MenuLayout
  }>(), {
    mode: MenuLayout.VERTICAL
  })

  const route = useRoute()
  // @ts-ignore
  const activeRoute = computed(() => route.matched.findLast(r => !r?.meta?.hideMenu) || route) // last route of no `hideMenu` in meta

  const settingStore = useSettingStore()
  const menuStore = useMenuStore()

  const menuData = computed(() => {
    return routeToMenu(AdminRoutes.concat(menuStore.routes))
  })

</script>

<template>
  <div :class="`menu--${props.mode}`">
    <el-menu
      router
      border-r="0"
      :mode="props.mode"
      :collapse="settingStore.menuCollapsed"
      :default-active="route?.meta?.activeMenu || activeRoute.path"
    >
      <MenuItem
        v-for="menu in menuData"
        :key="menu.index"
        v-bind="menu"
      />
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
    .el-sub-menu__title, .el-menu-item {
      @apply h-12 text-regular select-none;
      .icon {
        @apply mr-10px text-base;
      }

      &:hover {
        @apply bg-transparent text-primary;
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

      .el-sub-menu__title, .el-menu-item {
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

        // &.is-active {
        //   @apply text-primary bg-transparent;
        // }
      }
    }
  }
</style>
