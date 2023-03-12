<script setup lang="ts" name="SplitPane">
  const direction = ref('row')
</script>

<template>
  <div page-base bg-page rounded h-content>
    <Splitter :direction="direction" :draggable="true" :triggerSize="8">
      <template #prev>
        <PageTitle title="分栏一" description="分栏通用动态拖拽组件" />
      </template>
      <template #next>
        <PageTitle title="分栏二" description="支持 row、column 两种模式" />
      </template>
    </Splitter>
  </div>
</template>

<style lang="scss" scoped></style>
