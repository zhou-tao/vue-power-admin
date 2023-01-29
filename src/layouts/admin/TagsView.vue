<script setup lang="ts" name="TagsView">
  import { useAppStore } from '@/store/modules/app'

  const { visitedViews, addVisitedView, deleteVisitedView } = $(useAppStore())
  const router = useRouter()
  const route = useRoute()

  onBeforeMount(() => {
    initTag()
  })

  watch(route, v => {
    const { path, meta } = v
    addVisitedView({
      path,
      meta
    })
  })

  function initTag() {}

</script>

<template>
  <div flex items="center" gap="2" h="10" px-5 border-t="solid lbg" dark:border-t="dbg">
    <el-tag
      size="large"
      v-for="v in visitedViews"
      :key="v.path"
      :class="{ active: v.path === route.path }"
      :type="v.path === route.path ? '' : 'info'"
      :closable="v.path === route.path"
      @click="router.push(v.path)"
      @close="deleteVisitedView(v)"
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
