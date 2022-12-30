<script setup lang="ts" name="Sidebar">
  import {
    User,
    // Menu as IconMenu,
    Operation,
    Odometer,
    Connection,
    Setting
  } from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<template>
  <div class="sidebar" h="full" bg="white">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><odometer /></el-icon>
        <span>仪表盘</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><user /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><connection /></el-icon>
        <span>权限管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><operation /></el-icon>
        <span>菜单管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><setting /></el-icon>
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 9%);
  }

  ::v-deep .el-menu {
    border-right: none;
  }
</style>
