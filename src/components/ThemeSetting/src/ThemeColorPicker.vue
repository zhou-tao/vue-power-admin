<script setup lang="ts" name="ThemeColorPicker">
  import { CSSVarEnum } from '@/enums/appEnum'
  import { getCssVar, setCssVar } from '@/hooks/web/useCssVar'

  const color = ref(getCssVar(CSSVarEnum.COLOR_PRIMARY))
  const predefineColors = ref([
    '#e11d48',
    '#ea580c',
    '#84cc16',
    '#10b981',
    '#377dff',
    '#8b5cf6'
  ])

  watch(color, (v) => {
    setCssVar(CSSVarEnum.COLOR_PRIMARY, v)
  })
</script>

<template>
  <div flex="center">
    <div
      v-for="c in predefineColors"
      :key="c"
      p-1
      box-border
      rounded
      border="1px solid"
      mr="1"
      cursor="pointer"
      :style="{ borderColor: color === c ? c : 'var(--el-border-color)' }"
      @click="color = c"
    >
      <div
        w-5
        h-5
        rounded="2px"
        border="1px solid secondary"
        :style="{ backgroundColor: c }"
      />
    </div>
    <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
  </div>
</template>

<style lang="scss" scoped>
</style>
