<script setup lang="ts" name="ThemeSwitch">
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

</script>

<template>
  <span @click="toggleDark()" text="regular xl" cursor="pointer" leading="none">
    <i-app-sun v-if="isDark" />
    <i-app-moon v-else />
  </span>
</template>

<style lang="scss" scoped></style>
