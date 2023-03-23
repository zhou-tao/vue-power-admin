<script setup lang="ts">
  import type { GuideStep } from './type'
  import { STEPS_KEY } from '@c/Guide/src/Guide.vue'

  const props = withDefaults(defineProps<{
    title?: string
    description?: string
    placement?: string
  }>(), {
    title: '',
    description: '',
  })

  const steps = inject<GuideStep[]>(STEPS_KEY, [])

  const guideStepRef = ref<HTMLDivElement>()

  onMounted(() => {
    if(guideStepRef.value) {
      steps.push({
        title: props.title,
        description: props.description,
        placement: props.placement,
        el: markRaw(guideStepRef.value.children[0])
      })
    }
  })
</script>
<template>
  <div contents ref="guideStepRef">
    <slot></slot>
  </div>
</template>
