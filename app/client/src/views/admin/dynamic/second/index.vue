<script setup lang="ts" name="Second">
</script>

<template>
  <div page-card>
    <PageTitle description="动态路由：第二个子路由。" />
    <p>通过 v-permission 指令来控制当前页面内按钮级权限。例如，本页面拥有一下权限: </p>
    <el-button type="primary" plain v-permission:add ml-2>v-permission:add 添加权限</el-button>
    <el-button type="warning" plain v-permission:update ml-2>v-permission:update 修改权限</el-button>
    <el-button type="danger" plain v-permission:delete ml-2>v-permission:delete 删除权限</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
