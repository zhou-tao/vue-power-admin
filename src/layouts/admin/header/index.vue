<script setup lang="ts" name="LayoutHeader">
  import Breadcrumb from './components/Breadcrumb.vue'
  import ThemeSwitch from '@c/ThemeSwitch/index.vue'
  import LogoView from '../sider/components/LogoView.vue'
  import Menu from '../sider/components/Menu.vue'
  import { useUserStore } from '@/store/modules/user'
  import useSetting, { useMenuCollapsed, useMenuLayout } from '@h/setting/useSetting'
  import { isSupported, isFullScreen, toggleFullScreen, autoRemoveListener } from '@h/event/useFullScreen'
  import { MenuLayout } from '@/enums/menuEnum'

  const { username } = $(useUserStore())
  const { hasBreadcrumb, hasLocales } = $(useSetting())
  const { collapsed, toggleCollapse } = useMenuCollapsed()
  const { isVertical } = useMenuLayout()
  autoRemoveListener()
</script>

<template>
  <div h="header" px-5 flex items="center" justify="between">
    <div flex items="center" gap="6">
      <span v-if="isVertical" cursor="pointer" leading="0" @click="toggleCollapse()">
        <i-ep-expand v-show="collapsed" />
        <i-ep-fold v-show="!collapsed" />
      </span>
      <LogoView mb="0!" mr="6" v-else />
      <Breadcrumb v-if="hasBreadcrumb && isVertical" />
    </div>
    <Menu v-if="!isVertical" :mode="MenuLayout.HORIZONTAL" />
    <div flex items="center" gap="6">
      <span v-if="isSupported" cursor="pointer" leading="0" @click="toggleFullScreen">
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
      <el-dropdown v-show="hasLocales">
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
            <i-emoji-chicken text="2xl" />
            <span text="base" ml="2">{{ username }}</span>
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
  </div>
</template>
