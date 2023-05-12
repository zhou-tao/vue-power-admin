<script setup lang="ts" name="LayoutContent">
import { useSettingStore } from '@/store/modules/setting'
import { useMenuStore } from '@/store/modules/menu'

const { hasPageAnimate } = $(useSettingStore())

const route = useRoute()
const ComponentKey = ref(route.path)

watch(() => useMenuStore().refreshRoute, v => {
  const { updateRefreshRoute } = useMenuStore()
  if (v) {
    console.log(ComponentKey.value)
    if (ComponentKey.value == route.path) {
      ComponentKey.value = route.path + 1
    } else {
      ComponentKey.value = route.path
    }
    updateRefreshRoute(false)

  }
})
</script>

<template>
  <el-main p="3" pb="0" relative>
    <router-view v-slot="{ Component, route }">
      <transition :name="hasPageAnimate ? 'fade-slide' : ''">
        <component :is="Component" :key="ComponentKey" />
      </transition>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
