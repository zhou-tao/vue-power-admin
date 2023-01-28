<script setup lang="ts" name="TagsView"></script>

<template>
  <div flex items="center" gap="2" h="10" px-5 border-t="solid lbg" dark:border-t="dbg">
    <el-tag size="large" type="info">首页</el-tag>
    <el-tag size="large" type="info">用户管理</el-tag>
    <el-tag size="large" type="info">权限管理</el-tag>
    <el-tag size="large" type="info">菜单管理</el-tag>
    <el-tag size="large" closable>系统设置</el-tag>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-tag) {
  @apply cursor-pointer h-7;
}
</style>
