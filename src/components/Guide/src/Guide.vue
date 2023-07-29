<script lang="ts">
  import type { GuideStepProps } from './type'

  export const STEPS_KEY = Symbol('steps')
</script>

<script setup lang="ts" name="Guide">
  const activeStep = ref(0)

  const steps = reactive<GuideStepProps[]>([])
  provide(STEPS_KEY, steps)

  const step = computed(() => steps[activeStep.value])

  const pos = ref({
    top: 0,
    left: 0,
    width: 0,
    height: 0
  })

  const stepChanged = () => {
    if (!step.value) return
    const { top, left, width, height } = step.value.el.getBoundingClientRect()
    pos.value = {
      top,
      left,
      width,
      height
    }
  }

  watch(step, stepChanged)

  const stepBackward = () => {
    transitioning.value = true
    activeStep.value--
  }
  const stepForward = () => {
    transitioning.value = true
    activeStep.value++
  }
  const show = ref(false)

  const transitioning = ref(false)

  const handleEnd = () => {
    show.value = false
    activeStep.value = 0
  }

  defineExpose({
    start: async () => {
      show.value = true
      await nextTick()
      stepChanged()
    }
  })
</script>

<template>
  <el-tooltip
    v-if="step && !transitioning && show"
    visible
    width="400px"
    :placement="step.placement"
  >
    <template #content>
      <div>
        <h3>
          {{ step.title }}
        </h3>
        <p>
          {{ step.description }}
        </p>
      </div>
      <div flex="center">
        <el-button v-if="activeStep > 0" type="primary" plain size="small" @click="stepBackward">
          <div i-ep-arrow-left-bold />
        </el-button>
        <el-button v-if="activeStep < steps.length - 1" type="primary" plain size="small" @click="stepForward">
          <div i-ep-arrow-right-bold />
        </el-button>
        <el-button v-if="activeStep === steps.length - 1" type="primary" plain size="small" @click="handleEnd">
          我知道了
        </el-button>
      </div>
    </template>
    <div class="focus-helper" :style="`--g-top: ${pos.top}px;--g-left: ${pos.left}px;--g-scale-x:${pos.width / 100};--g-scale-y: ${pos.height / 100};--g-width: ${pos.width}px; --g-height: ${pos.height}px;`" />
  </el-tooltip>
  <div v-if="show" class="animation-helper" :style="`--g-top: ${pos.top}px;--g-left: ${pos.left}px;--g-scale-x:${pos.width / 100};--g-scale-y: ${pos.height / 100};--g-width: ${pos.width}px; --g-height: ${pos.height}px;`" @transitionend="() => transitioning = false" />
  <slot />
</template>

<style lang="scss" scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to { opacity: 0; }
}
::view-transition-old(root) {
  animation: none;
}

::view-transition-new(root) {
  animation: none;
}
.focus-helper {
  @apply fixed top-[var(--g-top)] left-[var(--g-left)] h-[var(--g-height)] w-[var(--g-width)];
}
.animation-helper {
  @apply fixed top-[var(--g-top)] left-[var(--g-left)] b-solid b-1 rounded b-gray-2 h-[var(--g-height)] w-[var(--g-width)];
  transition: all ease-in-out 500ms;
  box-shadow: rgba(22, 22, 22, 0.8) 0px 0px 1px 2px, rgba(22, 22, 22, 0.5) 0px 0px 0px 5000px;
}
</style>

<style>
.dark .animation-helper {
  box-shadow: rgba(200, 200, 200, 0.8) 0px 0px 1px 2px, rgba(200, 200, 200, 0.5) 0px 0px 0px 5000px;
}
</style>
