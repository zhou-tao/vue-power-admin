<script setup lang="ts" name="LayoutTabs">
  import type { AppRouteConfig } from '@/router/types'
  import { useAppStore } from '@/store/modules/app'

  let { visitedViews, addVisitedView, deleteVisitedView } = $(useAppStore())
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

  function removeOtherTag(v: AppRouteConfig) {
    visitedViews = visitedViews.filter(view => view.path === v.path)
  }

  function openMenu(v: AppRouteConfig) {
    if (v.path !== route.path) router.push(v.path)
  }

</script>

<template>
  <div
    flex
    items="center"
    gap="2"
    h="10"
    px-5
    border-t="solid lbg"
    dark:border-t="dbg"
  >
    <el-dropdown
      v-for="v in visitedViews"
      :key="v.path"
      trigger="contextmenu"
    >
      <el-tag
        size="large"
        :class="{ active: v.path === route.path }"
        :type="v.path === route.path ? '' : 'info'"
        :closable="v.path === route.path && visitedViews.length > 1"
        @click="router.push(v.path)"
        @close="removeTag(v)"
        @contextmenu.prevent="openMenu(v)"
      >
        {{ v?.meta?.title }}
      </el-tag>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="router.replace(v.path)">刷新</el-dropdown-item>
          <el-dropdown-item @click="removeTag(v)" :disabled="visitedViews.length === 1">关闭</el-dropdown-item>
          <el-dropdown-item @click="removeOtherTag(v)" :disabled="visitedViews.length === 1">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-tag) {
  @apply cursor-pointer h-7;

  .el-tag__content {
    @apply select-none;
  }
}
</style>
