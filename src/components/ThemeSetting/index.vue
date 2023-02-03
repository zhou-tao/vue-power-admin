<script setup lang="ts" name="ThemeSetting">
  const drawer = ref(false)
  const breadcrumb = ref(false)
  const tag = ref(false)
  const footer = ref(false)
</script>

<template>
  <div
    fixed
    right-0
    top="1/3"
    w-12
    h-12
    bg-dark
    dark:bg="white"
    rounded-l
    cursor="pointer"
    op="20"
    hover:op="60"
    transition-base
    text="2xl"
    flex
    justify="center"
    items="center"
    @click="drawer = true"
  >
    <i-emoji-artist-palette />
  </div>
  <el-drawer
    v-model="drawer"
    title="面板设置"
    direction="rtl"
    size="20%"
  >
    <div flex="~ col" items="center">
      <el-divider>主题</el-divider>
      <el-switch v-model="tag" size="large" />
      <el-divider>导航栏</el-divider>
      <el-divider>界面</el-divider>
      <div w-full>
        <div flex items="center" justify-between>
          <span>面包屑</span>
          <el-switch v-model="breadcrumb" />
        </div>
        <div flex items="center" justify-between>
          <span>标签页</span>
          <el-switch v-model="tag" />
        </div>
        <div flex items="center" justify-between>
          <span>页脚</span>
          <el-switch v-model="footer" />
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped></style>
