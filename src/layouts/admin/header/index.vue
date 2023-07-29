<script setup lang="ts" name="LayoutHeader">
  import { useI18n } from 'vue-i18n'
  import Breadcrumb from './components/Breadcrumb.vue'
  import ThemeSwitch from '@/components/ThemeSwitch'
  import LogoView from '@/layouts/admin/sider/components/LogoView.vue'
  import Menu from '@/layouts/admin/sider/components/menu/index.vue'
  import { useUserStore } from '@/store/modules/user'
  import { useSettingStore } from '@/store/modules/setting'
  import { isSupported, isFullScreen, toggleFullScreen, autoRemoveListener } from '@/hooks/web/useFullScreen'
  import { MenuLayout } from '@/enums/menuEnum'
  import { getLocaleTypes } from '@/locales'
  import { useMessage } from '@/hooks/web/useMessage'

  const { $message } = useMessage()
  const { username, avatar } = storeToRefs(useUserStore())
  const settingStore = useSettingStore()
  const {
    hasBreadcrumb,
    hasLocales,
    menuCollapsed,
    isVerticalMenu
  } = storeToRefs(settingStore)

  autoRemoveListener()

  const localeTypes = getLocaleTypes()

  const { t, locale } = useI18n()

  function handleLocaleChange(language: string, name: string) {
    locale.value = language
    $message.success(`${t('header.changeLocale')}: ${name}`)
  }
</script>

<template>
  <div
    h="header"
    px-6
    flex="center"
    justify="between"
    border-b="solid root_light dark:root_dark"
  >
    <div flex items="center" gap="6">
      <span v-if="isVerticalMenu" cursor="pointer" leading="0" @click="settingStore.toggleCollapse()">
        <div v-show="menuCollapsed" i-ep-expand />
        <div v-show="!menuCollapsed" i-ep-fold />
      </span>
      <LogoView v-else mr="6" />
      <Breadcrumb v-if="hasBreadcrumb && isVerticalMenu" />
    </div>
    <Menu v-if="!isVerticalMenu" :mode="MenuLayout.HORIZONTAL" />
    <div flex items="center" gap="5">
      <div v-if="isSupported" class="icon-view" @click="toggleFullScreen">
        <div v-show="!isFullScreen" i-ri-fullscreen-fill />
        <div v-show="isFullScreen" i-ri-fullscreen-exit-fill />
      </div>
      <el-dropdown>
        <el-badge is-dot leading="none">
          <div class="icon-view">
            <div i-ep-bell-filled />
          </div>
        </el-badge>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              {{ t('header.message') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown v-show="hasLocales">
        <div class="icon-view">
          <div i-app-locale text="18px!" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="({ value, name }, i) in localeTypes" :key="value" :divided="!!i" @click="handleLocaleChange(value, name)">
              <div inline-block w-18>
                {{ name }}
              </div>
              <div v-if="value === locale" i-ri-check-fill />
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
                <div i-ep-lock mr="1" />{{ t('header.setup') }}
              </el-dropdown-item>
              <el-dropdown-item
                divided
                @click="$router.replace('/login?redirect=logout')"
              >
                <div i-ep-switch-button mr="1" />
                {{ $t('header.logout') }}
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
  @apply w-8 h-8 rounded-full flex-center bg-light cursor-pointer text-15px transition-base hover:bg-light_hover;
}

:deep(.el-dropdown [role=button]) {
  outline: none;
}
</style>
