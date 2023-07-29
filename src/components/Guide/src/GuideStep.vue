<script setup lang="ts">
  import { STEPS_KEY } from '@c/Guide/src/Guide.vue'
  import type { GuideStepProps } from './type'

  const props = withDefaults(defineProps<{
    title?: string
    description?: string
    placement?: string
  }>(), {
    title: '',
    description: ''
  })

  const steps = inject<GuideStepProps[]>(STEPS_KEY, [])

  const guideStepRef = ref<HTMLDivElement>()

  onMounted(() => {
    if (guideStepRef.value) {
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
  <div ref="guideStepRef" contents>
    <slot />
  </div>
</template>
