<script setup lang="ts" name="AdminLayout">
  import AppHeader from './AppHeader.vue'
  import Sidebar from './Sidebar.vue'
  import TagsView from './TagsView.vue'
  import AppMain from './AppMain.vue'
  import AppFooter from './AppFooter.vue'

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
        <el-container overflow-y="auto">
          <el-main>
            <app-main />
            <app-footer v-if="config.APP.copyright" />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
