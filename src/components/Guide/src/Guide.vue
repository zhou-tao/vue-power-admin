<script setup lang="ts" name="Guide">
  import { GuideDom, GuideValue, GUIDE_KEY } from '@/directives/guide'

  const guides = inject<GuideDom>(GUIDE_KEY, {})

  const activeStep = ref(0)

  const steps = computed<GuideValue[]>(() => {
    const guideEntries = Object.entries(guides).sort(([o1], [o2]) => parseInt(o1) - parseInt(o2))
    return guideEntries.map(([, val]) => val)
  })

  const step = computed(() => steps.value[activeStep.value])

  const pos = ref({
    top: 0,
    left: 0,
    width: 0,
    height: 0
  })

  const stepChanged = () => {
    const step = steps.value[activeStep.value]
    if(!step) return
    const { top, left, width, height } = step.el.getBoundingClientRect()
    pos.value = {
      top,
      left,
      width,
      height
    }
  }

  onMounted(() => {
    stepChanged()
  })

  watch(steps, () => {
    activeStep.value = 0
  })

  watch(activeStep, stepChanged)

  const stepBackward = () => {
    // @ts-ignore
    // if(document.startViewTransition) {
    //   // @ts-ignore
    //   document.startViewTransition(() => {
    //     activeStep.value--
    //   })
    // } else {
    // }
    activeStep.value--
  }
  const stepForward = () => {
    // // @ts-ignore
    // if (document.startViewTransition) {
    //   // @ts-ignore
    //   document.startViewTransition(() => {
    //     activeStep.value++
    //   })
    // } else {
    // }
    activeStep.value++
  }
  const show = ref(true)

  const transitioning = ref(false)

  const focusHelper = ref()
</script>
<template>
  <template v-if="show">
    <div class="guide">
      <el-tooltip
        visible
        width="400px"
        :placement="step.placement"
        :virtual-ref="focusHelper"
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
          <div center>
            <el-button type="primary" plain v-if="activeStep > 0" @click="stepBackward" size="small">
              <i-ep-arrow-left-bold />
            </el-button>
            <el-button type="primary" plain v-if="activeStep < steps.length - 1" @click="stepForward" size="small">
              <i-ep-arrow-right-bold />
            </el-button>
            <el-button type="primary" plain v-if="activeStep === steps.length - 1" @click="show = false" size="small">
              我知道了
            </el-button>
          </div>
        </template>
      </el-tooltip>
    </div>
    <div ref="focusHelper" class="focus-helper" @transitionstart="() => transitioning = true" @transitionend="() => transitioning = false" :style="`--g-top: ${pos.top}px;--g-left: ${pos.left}px;--g-scale-x:${pos.width / 100};--g-scale-y: ${pos.height / 100};--g-width: ${pos.width}px; --g-height: ${pos.height}px;`">
    </div>
  </template>
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
  @apply fixed top-[var(--g-top)] left-[var(--g-left)] b-solid b-1 rounded b-gray-2 h-[var(--g-height)] w-[var(--g-width)];
  transition: all ease-in-out 500ms;
  box-shadow: rgba(200, 200, 200, 0.8) 0px 0px 1px 2px, rgba(200, 200, 200, 0.5) 0px 0px 0px 5000px;
}
</style>
