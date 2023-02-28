<script setup lang="ts" name="Workbench">
  import { AreaLineChart } from '@c/ECharts'
  import ShortCut from '@/components/ShortCut'
  import { useUserStore } from '@/store/modules/user'
  import type { ChartDataset } from '@/components/ECharts/src/useECharts'

  const userStore = useUserStore()

  const cards = [
    { title: '昨日新增', total: 99007, icon: 'ic:round-star', cls: 'text-5xl text-amber-5', hover: 'hover:text-amber-5' },
    { title: '投放中内容', total: 1024, icon: 'ph:git-fork-bold', cls: 'text-rose-5', hover: 'hover:text-rose-5' },
    { title: '日新增内容', total: 0, icon: 'octicon:issue-opened-16', cls: 'text-4xl text-green-5', hover: 'hover:text-green-5' },
    { title: '较昨日新增', total: 996, icon: 'ph:git-pull-request-bold', cls: 'text-indigo-5', hover: 'hover:text-indigo-5' }
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
</script>

<template>
  <div page-base>
    <el-row mb="4" :gutter="16">
      <el-col :span="18">
        <Card>
          <div text="3xl" flex items="center" py="4">
            <i-emoji-clapping-hands />
            <span text="2xl" ml="2">
              欢迎回来，{{ userStore.username }} ~
            </span>
          </div>
          <el-divider />
          <div flex justify-around items="center">
            <TotalCard v-for="card in cards" :key="card.title" v-bind="card" size="small" />
          </div>
          <div h="391px" mt="8" mb="-8">
            <AreaLineChart v-model="lineData" />
          </div>
        </Card>
      </el-col>
      <el-col :span="6">
        <Card title="快捷入口">
          <div flex="~ wrap" justify-between mt="4">
            <ShortCut v-for="(r, i) in shortCuts" :key="i" v-bind="r" />
          </div>
          <el-divider />
          <Card title="最近访问" :padding="false" />
          <div flex="~ wrap" justify-between mt="4">
            <ShortCut v-for="(r, i) in shortCuts" :key="i" v-bind="r" />
          </div>
        </Card>
      </el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="12">
        <Card title="任务待办" />
      </el-col>
      <el-col :span="12">
        <Card title="最新动态" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-divider--horizontal) {
  border-top: 1px var(--el-border-color-lighter) var(--el-border-style);
}
</style>
