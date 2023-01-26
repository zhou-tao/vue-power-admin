<script setup lang="ts" name="BreadCrumb"></script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
    >用户管理</el-breadcrumb-item
    >
    <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped></style>
