<script setup lang="ts" name="LayoutHeader">
  import Breadcrumb from './components/Breadcrumb.vue'
  import ThemeSwitch from '@/components/ThemeSwitch'
  import LogoView from '../sider/components/LogoView.vue'
  import Menu from '../sider/components/menu/index.vue'
  import { useUserStore } from '@/store/modules/user'
  import { useSettingStore } from '@/store/modules/setting'
  import { isSupported, isFullScreen, toggleFullScreen, autoRemoveListener } from '@/hooks/web/useFullScreen'
  import { MenuLayout } from '@/enums/menuEnum'

  const { username, avatar } = $(useUserStore())
  const {
    hasBreadcrumb,
    hasLocales,
    menuCollapsed,
    isVerticalMenu,
    toggleCollapse
  } = $(useSettingStore())

  autoRemoveListener()
</script>

<template>
  <div
    h="header"
    px-6
    flex
    items="center"
    justify="between"
    border-b="solid root_light"
    dark:border-b="root_dark"
  >
    <div flex items="center" gap="6">
      <span v-if="isVerticalMenu" cursor="pointer" leading="0" @click="toggleCollapse()">
        <i-ep-expand v-show="menuCollapsed" />
        <i-ep-fold v-show="!menuCollapsed" />
      </span>
      <LogoView mr="6" v-else />
      <Breadcrumb v-if="hasBreadcrumb && isVerticalMenu" />
    </div>
    <Menu v-if="!isVerticalMenu" :mode="MenuLayout.HORIZONTAL" />
    <div flex items="center" gap="5">
      <div class="icon-view" text="13px!" v-if="isSupported" @click="toggleFullScreen">
        <i-ri-fullscreen-fill v-show="!isFullScreen" />
        <i-ri-fullscreen-exit-fill v-show="isFullScreen" />
      </div>
      <el-dropdown>
        <el-badge is-dot leading="none">
          <div class="icon-view">
            <i-ep-bell-filled />
          </div>
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
      <el-dropdown v-show="hasLocales">
        <div class="icon-view">
          <i-app-locale text="18px!" />
        </div>
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
      <div cursor="pointer" ml="6">
        <el-dropdown>
          <div flex items="center">
            <Avatar :src="avatar" />
            <span text="base" ml="2">{{ username }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push({ path: '/personal/index', query: { tab: 'password' } })">
                <i-ep-lock />账号设置
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
  </div>
</template>

<style scoped lang="scss">
.icon-view {
  @apply w-8 h-8 rounded-full flex justify-center items-center bg-light cursor-pointer text-15px transition-base hover:bg-light_hover;
}

</style>
