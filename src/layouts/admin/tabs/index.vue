<script setup lang="ts" name="LayoutTabs">
  import type { AppRouteConfig } from '@/router/types'
  import { useAppStore } from '@/store/modules/app'

  const appStore = useAppStore()
  const router = useRouter()
  const route = useRoute()
  const tabRef = ref<HTMLDivElement>()
  const dropdownRefs = ref<{
    handleClose: () => void
  }[]>([])

  watch(route, v => {
    const { path, meta } = v
    const success = appStore.addVisitedView({
      path,
      meta
    })
    if (success) {
      scrollToActiveTag()
    }
  }, { immediate: true })

  function removeTag(v: AppRouteConfig) {
    appStore.deleteVisitedView(v)
    if (v.path === route.path) {
      const lastTag = appStore.visitedViews[appStore.visitedViews.length - 1]
      router.push(lastTag.path)
    }
  }

  function removeOtherTag(v: AppRouteConfig) {
    appStore.visitedViews = appStore.visitedViews.filter(view => view.path === v.path)
  }

  function closeOtherDropdowns(index: number) {
    dropdownRefs.value.forEach((dropdown, i) => {
      if (i !== index) {
        dropdown.handleClose()
      }
    })
  }

  async function scrollToActiveTag() {
    await nextTick()
    // Todo: need handle -> active tag is existed & scroll to back
    tabRef.value?.scrollTo({ behavior: 'smooth', left: tabRef.value.scrollWidth })
  }

</script>

<template>
  <div
    ref="tabRef"
    flex
    items="center"
    gap="2"
    h="tab"
    px-5
    overflow-x="auto"
  >
    <el-dropdown
      v-for="(v, i) in appStore.visitedViews"
      :key="v.path"
      ref="dropdownRefs"
      trigger="contextmenu"
    >
      <el-tag
        size="large"
        :class="{ active: v.path === route.path }"
        :type="v.path === route.path ? '' : 'info'"
        :closable="v.path === route.path && appStore.visitedViews.length > 1"
        @click="router.push(v.path)"
        @close="removeTag(v)"
        @contextmenu.prevent="closeOtherDropdowns(i)"
      >
        {{ $t(v?.meta?.title!) }}
      </el-tag>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="router.replace(v.path)">{{ $t('tab.refresh') }}</el-dropdown-item>
          <el-dropdown-item @click="removeTag(v)" :disabled="appStore.visitedViews.length === 1">{{ $t('tab.close') }}</el-dropdown-item>
          <el-dropdown-item @click="removeOtherTag(v)" :disabled="appStore.visitedViews.length === 1">{{ $t('tab.closeOther') }}</el-dropdown-item>
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
