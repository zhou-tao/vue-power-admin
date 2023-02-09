<script setup lang="ts" name="LayoutContent">
  import { usePageAnimate } from '@/hooks/setting/useSetting'

  const { animate } = usePageAnimate()
</script>

<template>
  <el-main relative flex="~ col" justify="between" p="3" pb="0" overflow-y="auto">
    <router-view v-slot="{ Component, route }">
      <transition :name="animate ? 'fade-slide' : ''">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
