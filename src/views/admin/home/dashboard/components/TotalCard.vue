<script setup lang="ts" name="TotalCard">
  defineProps<{
    title: string,
    total: number
  }>()
</script>

<template>
  <div h="18" flex items="center" bg="page" p="6">
    <div
      w="16"
      h="16"
      rounded
      bg="dark-9"
      op="60"
      flex
      items="center"
      justify-center
      text="3xl primary"
      mr="12"
    >
      <slot name="icon"></slot>
    </div>
    <div flex="~ col">
      <span text="base secondary">{{ title }}</span>
      <span text="3xl" font="mono" mt="2">${{ total }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
