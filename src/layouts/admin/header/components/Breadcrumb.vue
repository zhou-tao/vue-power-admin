<script setup lang="ts" name="BreadCrumb">
  const route = useRoute()
  const matched = computed(() => route.matched.filter(r => !r?.meta?.hideMenu && r?.meta?.title))
</script>

<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="r in matched"
        :key="r.path"
        v-bind="r.path !== route.path ? { to: r.path } : {}"
      >
        {{ r.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped></style>
