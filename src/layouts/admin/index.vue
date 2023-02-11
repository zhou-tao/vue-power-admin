<script setup lang="ts" name="AdminLayout">
  import LayoutHeader from './header/index.vue'
  import LayoutSider from './sider/index.vue'
  import LayoutTabs from './tabs/index.vue'
  import LayoutContent from './content/index.vue'
  import LayoutFooter from './footer/index.vue'
  import ThemeSetting from '@/components/ThemeSetting'

  import { useSettingStore } from '@/store/modules/setting'

  const { hasTagsView } = $(useSettingStore())

</script>

<template>
  <div class="admin-layout" h="full">
    <el-container h="full" bg="lbg" dark:bg="dbg">
      <LayoutSider />
      <el-container>
        <el-header h="auto" p-0 bg="white" dark:bg="#222338">
          <LayoutHeader />
          <LayoutTabs v-if="hasTagsView" />
        </el-header>
        <el-container direction="vertical" overflow="hidden">
          <LayoutContent />
          <LayoutFooter />
          <ThemeSetting />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-main) {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
