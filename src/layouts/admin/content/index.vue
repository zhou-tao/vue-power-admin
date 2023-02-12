<script setup lang="ts" name="LayoutContent">
  import { useSettingStore } from '@/store/modules/setting'

  const { hasPageAnimate } = $(useSettingStore())
</script>

<template>
  <el-main
    p="3"
    pb="0"
    relative
  >
    <router-view v-slot="{ Component, route }">
      <transition :name="hasPageAnimate ? 'fade-slide' : ''">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
