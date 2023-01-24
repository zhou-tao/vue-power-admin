<script setup lang="ts" name="ThemeSwitch">
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

</script>

<template>
  <div @click="toggleDark()" cursor="pointer" text="base gray-2" dark:text="gray-8">
    <div
      w="24px"
      h="24px"
      flex
      justify="center"
      items="center"
      rounded="1/2"
      border="1px solid gray-8"
      dark:border="gray-2"
      transition="base"
      :style="{ backgroundColor: isDark ? '#E5E7EB' : '#1F2937' }"
    >
      <i-ep-sunny v-show="isDark" />
      <i-ep-moon v-show="!isDark" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
