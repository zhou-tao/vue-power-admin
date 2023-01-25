<script setup lang="ts" name="AdminLayout">
  import AppHeader from './AppHeader.vue'
  import Sidebar from './Sidebar.vue'
  import AppMain from './AppMain.vue'
  import AppFooter from './AppFooter.vue'

  import config from '@/config'
</script>

<template>
  <div class="admin-layout" h="full">
    <el-container h="full" bg="#f5f6fa" dark:bg="#1B1C31">
      <el-aside w="260px" shadow="card-dark">
        <sidebar />
      </el-aside>
      <el-container>
        <el-header h="80px" bg="white" dark:bg="#222338">
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
