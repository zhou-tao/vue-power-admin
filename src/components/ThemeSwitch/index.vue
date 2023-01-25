<script setup lang="ts" name="ThemeSwitch">
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

</script>

<template>
  <span @click="toggleDark()" cursor="pointer" leading="none">
    <i-ri-sun-fill v-show="isDark" />
    <i-ri-moon-fill v-show="!isDark" />
  </span>
</template>

<style lang="scss" scoped></style>
