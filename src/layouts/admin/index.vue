<script setup lang="ts" name="AdminLayout">
  import AppHeader from './AppHeader.vue'
  import Sidebar from './Sidebar.vue'
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
        <el-header h="16" bg="white" dark:bg="#222338">
          <app-header />
        </el-header>
        <el-container>
          <el-main>
            <app-main />
          </el-main>
          <el-footer v-if="config.APP.copyright">
            <app-footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
