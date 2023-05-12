<script setup lang="ts" name="LayoutTabs">
import type { AppRouteConfig } from '@/router/types'
import { useAppStore } from '@/store/modules/app'
import { useMenuStore } from '@/store/modules/menu'
import { ref } from 'vue'

let { visitedViews, addVisitedView, deleteVisitedView } = $(useAppStore())
const router = useRouter()
const route = useRoute()
const tabRef = ref<HTMLDivElement>()

watch(route, v => {
  const { path, meta } = v
  const success = addVisitedView({
    path,
    meta
  })
  scrollToActiveTag()
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

//刷新tag界面
function refreshTag(v:AppRouteConfig){
  const {updateRefreshRoute} = useMenuStore()
  updateRefreshRoute(true)
  // router.replace(v.path)
}

async function scrollToActiveTag() {
  await nextTick()
  // Todo: need handle -> active tag is existed & scroll to back
  const domEle = document.querySelector(".active") as HTMLDivElement
  let left = 0
  if(domEle && domEle.parentElement){
    left = domEle.parentElement.offsetLeft - (tabRef.value?tabRef.value.offsetLeft:0)
  }
  if (left < (tabRef.value?tabRef.value.scrollWidth:0)) {
    tabRef.value?.scrollTo({ behavior: 'smooth', left: left - 20 })
  } else {
    tabRef.value?.scrollTo({ behavior: 'smooth', left: tabRef.value.scrollWidth })
  }
}

</script>

<template>
  <div ref="tabRef" flex items="center" gap="2" h="tab" px-5 overflow-x="auto">
    <el-dropdown v-for="v in visitedViews" :key="v.path" trigger="contextmenu">
      <el-tag size="large" :class="{ active: v.path === route.path }" :type="v.path === route.path ? '' : 'info'"
        :closable="v.path === route.path && visitedViews.length > 1" @click="router.push(v.path)" @close="removeTag(v)"
        @contextmenu.prevent="openMenu(v)">
        {{ $t(v?.meta?.title!) }}
      </el-tag>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="refreshTag">{{ $t('tab.refresh') }}</el-dropdown-item>
          <el-dropdown-item @click="removeTag(v)" :disabled="visitedViews.length === 1">{{ $t('tab.close')
          }}</el-dropdown-item>
          <el-dropdown-item @click="removeOtherTag(v)" :disabled="visitedViews.length === 1">{{ $t('tab.closeOther')
          }}</el-dropdown-item>
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
