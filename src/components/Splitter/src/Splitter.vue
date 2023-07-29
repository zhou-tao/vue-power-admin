<script setup lang="ts" name="Splitter">
  import Trigger from './Trigger.vue'

  const props = withDefaults(defineProps<{
    direction?: 'row' | 'column'
    draggable?: boolean
    prevDefaultPercent?: number
    minPercent?: number
    maxPercent?: number
    triggerSize?: number
  }>(), {
    direction: 'row',
    draggable: true,
    prevDefaultPercent: 50,
    minPercent: 30,
    maxPercent: 70,
    triggerSize: 8
  })

  const splitterRef = ref<HTMLDivElement>()
  const barDirection = computed(() => props.direction === 'row' ? 'column' : 'row')
  const lengthType = computed(() => props.direction === 'row' ? 'width' : 'height')
  const prevPercent = ref(props.prevDefaultPercent)

  const triggerOffset = ref(0)

  // 按下滑动器
  function handleMouseDown(e: MouseEvent) {
    if (!props.draggable) return
    const { pageX, pageY } = e
    const { left, top } = (e.target! as HTMLElement).getBoundingClientRect()
    triggerOffset.value = props.direction === 'row' ? pageX - left : pageY - top
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  // 按下滑动器后移动鼠标
  function handleMouseMove(e: MouseEvent) {
    const { width, height, left, top } = splitterRef.value!.getBoundingClientRect()
    let percent
    if (props.direction === 'row') {
      const offset = e.pageX - left - triggerOffset.value
      percent = Number(((offset / width) * 100).toFixed(2))
    }
    else {
      const offset = e.pageY - top - triggerOffset.value
      percent = Number(((offset / height) * 100).toFixed(2))
    }
    if (percent > props.minPercent && percent < props.maxPercent) {
      prevPercent.value = percent
    }
  }

  // 松开滑动器
  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove)
  }
</script>

<template>
  <div ref="splitterRef" flex h-full :style="{ flexDirection: direction }">
    <div class="prev pane" :style="{ [lengthType]: `${prevPercent}%` }" overflow-hidden>
      <slot name="prev" />
    </div>
    <Trigger :direction="barDirection" :draggable="draggable" :size="triggerSize" @mousedown="handleMouseDown" />
    <div class="next pane" flex-1 overflow-auto>
      <slot name="next" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pane {
  @apply px-6 py-5 box-border;
}
</style>
