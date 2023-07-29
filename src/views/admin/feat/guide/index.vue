<script setup lang="ts" name="Guide">
  import { Guide, GuideStep } from '@/components/Guide'

  const guideRef = ref<typeof Guide>()

  const start = () => guideRef.value?.start()
</script>

<template>
  <div page-card>
    <div mb-4>
      <el-button @click="start">
        开始引导
      </el-button>
    </div>
    <div grid grid-cols-12 gap-8>
      <Guide ref="guideRef">
        <GuideStep title="第一步" description="第一步的描述">
          <div
            col="start-1 end-3"
            aspect-1
            bg-primary
            flex-center
          >
            1
          </div>
        </GuideStep>
        <GuideStep title="第二步" description="第二步的一些描述">
          <div
            col="start-5 end-6"
            aspect-1
            bg-amber-3
            flex-center
          >
            2
          </div>
        </GuideStep>
        <GuideStep title="第三步" description="第三步的一些描述" placement="left">
          <div
            col="start-10 end-12"
            aspect="1/2"
            bg-red-4
            flex-center
          >
            3
          </div>
        </GuideStep>

        <GuideStep title="第四步" description="第四步的一些描述" placement="top">
          <div
            row="start-2 end-3"
            col="start-4 end-8"
            bg-purple-4
            flex-center
            aspect="2/1"
          >
            4
          </div>
        </GuideStep>
      </Guide>
    </div>
  </div>
</template>
