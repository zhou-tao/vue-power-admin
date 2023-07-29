<script setup lang="ts" name="Workbench">
  import { AreaLineChart } from '@c/ECharts'
  import ShortCut from '@/components/ShortCut'
  import { useUserStore } from '@/store/modules/user'
  import type { ChartDataset } from '@/components/ECharts/src/useECharts'
  import { useMessage } from '@/hooks/web/useMessage'

  const userStore = useUserStore()
  const { $message } = useMessage()

  const cards = [
    { title: '新增Star', total: 99007, icon: 'ic:round-star', cls: 'text-5xl text-amber-5', hover: 'hover:text-amber-5' },
    { title: '新增Fork', total: 1024, icon: 'ph:git-fork-bold', cls: 'text-rose-5', hover: 'hover:text-rose-5' },
    { title: '新增Issues', total: 0, icon: 'octicon:issue-opened-16', cls: 'text-4xl text-green-5', hover: 'hover:text-green-5' },
    { title: '新增PR', total: 996, icon: 'ph:git-pull-request-bold', cls: 'text-indigo-5', hover: 'hover:text-indigo-5' }
  ]

  const lineData = reactive<ChartDataset>({
    dimensions: ['时间', '访问量', '下载量'],
    source: [
      ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      [20, 30, 40, 35, 34, 15, 46, 15, 12, 25, 34, 42],
      [40, 35, 34, 15, 46, 15, 12, 25, 34, 42, 20, 30]
    ]
  })

  const shortCuts = [
    { title: '内容管理', icon: 'ri:apple-line' },
    { title: '内容管理', icon: 'ri:apple-line' },
    { title: '内容管理', icon: 'ri:apple-line' },
    { title: '内容管理', icon: 'ri:apple-line' },
    { title: '内容管理', icon: 'ri:apple-line' },
    { title: '内容管理', icon: 'ri:apple-line' }
  ]

  const taskList = Array(5).fill(0).map((_, i) => ({
    id: i,
    title: 'Evan You 今天早上 8：50 紧急修复了 Vue Power Admin 的一个功能缺陷',
    description: '这个缺陷导致用户反馈上对其严重不满，Evan You 相当自责...',
    avatar: `https://picsum.photos/seed/picsum/60/60?random=${i + 1}`
  }))

  const infoList = Array(5).fill(0).map((_, i) => ({
    id: i,
    title: 'Evan You 今天早上 8：50 紧急修复了 Vue Power Admin 的一个功能缺陷',
    description: '这个缺陷导致用户反馈上对其严重不满，Evan You 相当自责...',
    avatar: `https://picsum.photos/seed/picsum/60/60?random=${i + 6}`
  }))

  function drinkCoffee() {
    $message.success('辛苦了，喝杯 JAVA~')
  }
</script>

<template>
  <div page-base>
    <el-row mb="4" :gutter="16">
      <el-col :span="18">
        <Card>
          <div text="3xl" flex="center" justify-between py="4">
            <div flex items="center">
              <div i-fluent-emoji-flat-clapping-hands />
              <span text="2xl" ml="2">
                欢迎回来，{{ userStore.username }} ~
              </span>
            </div>
            <div class="icon-view" @click="drinkCoffee">
              <div i-app-coffee />
            </div>
          </div>
          <el-divider />
          <div flex="center" justify-around>
            <TotalCard v-for="card in cards" :key="card.title" v-bind="card" size="small" />
          </div>
          <div h="391px" mt="8" mb="-8">
            <AreaLineChart v-model="lineData" :colors="[['#1d4ed8', '#1e40af'], ['#6d28d9', '#4c1d95']]" />
          </div>
        </Card>
      </el-col>
      <el-col :span="6">
        <Card title="快捷入口">
          <div flex="~ wrap" justify-between mt="4">
            <ShortCut v-for="(r, i) in shortCuts" :key="i" v-bind="r" />
          </div>
          <el-divider style="margin: 39px 0" />
          <Card title="最近访问" :padding="false" />
          <div flex="~ wrap" justify-between mt="4">
            <ShortCut v-for="(r, i) in shortCuts" :key="i" v-bind="r" />
          </div>
        </Card>
      </el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="12">
        <Card title="任务待办">
          <template #right>
            <el-button type="primary" link>
              更多<div i-ep-right />
            </el-button>
          </template>
          <List :data="taskList" mt="2" />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="最新动态">
          <template #right>
            <el-button type="primary" link>
              更多
              <div i-ep-right />
            </el-button>
          </template>
          <List :data="infoList" mt="2" />
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-divider--horizontal) {
  border-top: 1px var(--el-border-color-lighter) var(--el-border-style);
}

.icon-view {
  @apply w-18 h-18 rounded-full flex justify-center items-center bg-light cursor-pointer text-52px text-orange-6 transition-base hover:bg-light_hover;
}
</style>
