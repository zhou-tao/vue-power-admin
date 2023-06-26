<script setup lang="ts" name="Editor">
  const text = ref('<p>Hello Editor!</p>')
</script>

<template>
  <div page-card>
    <PageTitle description="基于WangEditor封装的富文本编辑器组件。" />
    <Editor v-model="text" />
  </div>
</template>

<style lang="scss" scoped></style>
