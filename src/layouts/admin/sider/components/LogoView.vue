<script setup lang="ts" name="LogoView">
  import config from '@/config'
  import { useMenuCollapsed } from '@h/setting/useSetting'

  const { collapsed } = useMenuCollapsed()
</script>

<template>
  <div h="15" mb-2 flex justify="center" items="center">
    <i-app-logo text="3xl" />
    <h1 v-show="!collapsed" text="xl regular" ml="2" font="bold mono" whitespace-nowrap>
      {{ config.APP.title }}
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>
