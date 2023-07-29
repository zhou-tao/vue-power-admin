<script setup lang="ts" name="DraggleBar">
  const props = withDefaults(defineProps<{
    direction?: 'row' | 'column'
    draggable?: boolean
    size?: number
  }>(), {
    direction: 'row',
    draggable: true,
    size: 8
  })

  function computedStyle(direction: string, isBtn = false) {
    const length = isBtn ? '36px' : '100%'
    return direction === 'row'
      ? {
        width: length,
        height: `${props.size}px`,
        cursor: isBtn ? 'ns-resize' : ''
      }
      : {
        width: `${props.size}px`,
        height: length,
        cursor: isBtn ? 'ew-resize' : ''
      }
  }
</script>

<template>
  <div :style="computedStyle(direction)" bg-root flex="center">
    <div
      v-if="draggable"
      :style="computedStyle(direction, true)"
      bg="placeholder hover:secondary active:regular"
      transition="base colors"
      rounded-full
      flex-center
    />
  </div>
</template>
