<script setup lang="ts" name="TagsView">
  import type { AppRouteConfig } from '@/router/types'
  import { useAppStore } from '@/store/modules/app'

  const { visitedViews, addVisitedView, deleteVisitedView } = $(useAppStore())
  const router = useRouter()
  const route = useRoute()

  watch(route, v => {
    const { path, meta } = v
    addVisitedView({
      path,
      meta
    })
  }, { immediate: true })

  function removeTag(v: AppRouteConfig) {
    deleteVisitedView(v)
    if (v.path === route.path) {
      const lastTag = visitedViews[visitedViews.length - 1]
      router.push(lastTag.path)
    }
  }

</script>

<template>
  <div flex items="center" gap="2" h="10" px-5 border-t="solid lbg" dark:border-t="dbg">
    <el-tag
      size="large"
      v-for="v in visitedViews"
      :key="v.path"
      :class="{ active: v.path === route.path }"
      :type="v.path === route.path ? '' : 'info'"
      :closable="v.path === route.path && visitedViews.length > 1"
      @click="router.push(v.path)"
      @close="removeTag(v)"
    >
      {{ v?.meta?.title }}
    </el-tag>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-tag) {
  @apply cursor-pointer h-7;
}
</style>
