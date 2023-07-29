<script setup lang="ts" name="First">

</script>

<template>
  <div page-card>
    <PageTitle description="动态路由：第一个子路由。" />
    <p>通过 v-permission 指令来控制当前页面内按钮级权限。例如，本页面拥有一下权限: </p>
    <el-button v-permission:add type="primary" plain ml-2>
      v-permission:add 添加权限
    </el-button>
    <el-button v-permission:update type="warning" plain ml-2>
      v-permission:update 修改权限
    </el-button>
    <el-button v-permission:delete type="danger" plain ml-2>
      v-permission:delete 删除权限
    </el-button>
  </div>
</template>

<style lang="scss" scoped></style>
