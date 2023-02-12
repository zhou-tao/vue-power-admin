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
    <el-container h="full" bg="root">
      <LayoutSider />
      <el-container>
        <el-header h="auto" p-0 bg="page">
          <LayoutHeader />
          <LayoutTabs v-if="hasTagsView" />
        </el-header>
        <el-container direction="vertical" overflow="hidden">
          <div overflow="auto">
            <LayoutContent />
            <LayoutFooter />
          </div>
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
