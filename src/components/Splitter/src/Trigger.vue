<script setup lang="ts" name="DraggleBar">
  const props = withDefaults(defineProps<{
    direction?: 'row' | 'column',
    size?: number
  }>(), {
    direction: 'row',
    size: 8
  })

  function computedStyle(direction: string, isBtn = false) {
    const length = isBtn ? '36px' : '100%'
    return direction === 'row' ? {
      width: length,
      height: `${props.size}px`,
      cursor: isBtn ? 'ns-resize' : ''
    } : {
      width: `${props.size}px`,
      height: length,
      cursor: isBtn ? 'ew-resize' : ''
    }
  }
</script>

<template>
  <div :style="computedStyle(direction)" bg-root center>
    <div :style="computedStyle(direction, true)" rounded-full bg="placeholder hover:secondary active:regular" transition="base colors"></div>
  </div>
</template>
