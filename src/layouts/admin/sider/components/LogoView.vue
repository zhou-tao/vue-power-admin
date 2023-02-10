<script setup lang="ts" name="LogoView">
  import config from '@/config'
  import { useSettingStore } from '@/store/modules/setting'

  const { menuCollapsed } = $(useSettingStore())

</script>

<template>
  <div h="header" mb-2 flex justify="center" items="center">
    <i-app-logo text="3xl" />
    <h1 v-show="!menuCollapsed" text="xl regular" ml="2" font="bold mono" whitespace-nowrap>
      {{ config.APP.title }}
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>
