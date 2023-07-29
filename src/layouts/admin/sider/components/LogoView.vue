<script setup lang="ts" name="LogoView">
  import config from '@/config'
  import { useSettingStore } from '@/store/modules/setting'

  const settingStore = useSettingStore()

  const router = useRouter()
</script>

<template>
  <div
    h="header"
    flex="center"
    cursor="pointer"
    @click="router.push('/home')"
  >
    <img src="@/assets/icons/logo.svg" width="28">
    <h1
      v-show="!settingStore.menuCollapsed"
      text="xl main hover:regular"
      ml="2"
      font="bold mono"
      whitespace-nowrap
      select-none
    >
      {{ config.APP.title }}
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>
