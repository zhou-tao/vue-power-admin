<script setup lang="ts" name="AdminLayout">
  import AppHeader from './AppHeader.vue'
  import Sidebar from './Sidebar.vue'
  import TagsView from './TagsView.vue'
  import AppMain from './AppMain.vue'
  import AppFooter from './AppFooter.vue'
  import ThemeSetting from '@c/ThemeSetting/index.vue'

  import config from '@/config'
</script>

<template>
  <div class="admin-layout" h="full">
    <el-container h="full" bg="lbg" dark:bg="dbg">
      <el-aside w-auto border-r="solid lbg" dark:border-r="dbg">
        <sidebar />
      </el-aside>
      <el-container>
        <el-header h="26" p-0 bg="white" dark:bg="#222338">
          <app-header />
          <tags-view />
        </el-header>
        <el-container overflow="hidden">
          <el-main relative flex="~ col" justify="between" p="3" pb="0" overflow-y="auto">
            <app-main />
          </el-main>
          <el-footer height="50px">
            <app-footer v-if="config.APP.copyright" />
          </el-footer>
          <ThemeSetting />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
