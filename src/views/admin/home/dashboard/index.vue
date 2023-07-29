<script setup lang="ts" name="Dashboard">
  import { AreaLineChart, BarChart, PieChart, RadarChart } from '@c/ECharts'
  import RankList from './components/RankList.vue'
  import { useMessage } from '@/hooks/web/useMessage'
  import type { ChartDataset } from '@/components/ECharts/src/useECharts'

  interface Card {
    title: string
    total: number
    icon: string
    cls?: string
    hover?: string
  }

  const cards: Card[] = [
    { title: 'Stars', total: 99007, icon: 'ic:round-star', cls: 'text-5xl text-amber-5', hover: 'hover:text-amber-5' },
    { title: 'Forks', total: 1024, icon: 'ph:git-fork-bold', cls: 'text-rose-5', hover: 'hover:text-rose-5' },
    { title: 'Issues', total: 0, icon: 'octicon:issue-opened-16', cls: 'text-4xl text-green-5', hover: 'hover:text-green-5' },
    { title: 'Pull Request', total: 996, icon: 'ph:git-pull-request-bold', cls: 'text-indigo-5', hover: 'hover:text-indigo-5' }
  ]

  const { $message } = useMessage()

  const dateType = ref(0)

  const lineData = reactive<ChartDataset>({
    dimensions: ['时间', '访问量', '下载量'],
    source: [
      ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      [20, 30, 40, 35, 34, 15, 46, 15, 12, 25, 34, 42],
      [40, 35, 34, 15, 46, 15, 12, 25, 34, 42, 20, 30]
    ]
  })

  const barData = reactive<ChartDataset>({
    dimensions: ['类型', '使用率'],
    source: [
      ['TS', 'Vue', 'JS', 'Handlebars', 'HTML', 'SCSS', 'Shell', 'Markdown', 'JSON'],
      [46, 32, 18.7, 11.1, 8.7, 6.1, 5.1, 4.1, 2.8]
    ]
  })

  const pieData = reactive<ChartDataset>({
    dimensions: ['访问来源', '热度'],
    source: [
      ['谷歌', '百度', '知乎', 'B站'],
      [1048, 735, 580, 484]
    ]
  })

  function handleQueryList() {
    $message.error('Notice: 996 ICU !')
  }

  function handleDateChange(v: number) {
    lineData.source = [
      ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      v ? [180, 230, 140, 85, 134, 215, 96, 135, 212, 85, 64, 142] : [20, 30, 40, 35, 34, 15, 46, 15, 12, 25, 34, 42],
      v ? [170, 135, 84, 115, 96, 77, 112, 125, 134, 242, 91, 82] : [40, 35, 34, 15, 46, 15, 12, 25, 34, 42, 20, 30]
    ]
  }
</script>

<template>
  <div page-base>
    <el-row :gutter="16" mb="4">
      <el-col v-for="card in cards" :key="card.title" :span="6">
        <TotalCard v-bind="card" @query-list="handleQueryList" />
      </el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="18">
        <Card title="热度趋势" height="360px">
          <AreaLineChart v-model="lineData" />
          <template #right>
            <el-radio-group v-model="dateType" mr="5" @change="handleDateChange">
              <el-radio-button :label="0">
                月
              </el-radio-button>
              <el-radio-button :label="1">
                年
              </el-radio-button>
            </el-radio-group>
          </template>
        </Card>
      </el-col>
      <el-col :span="6">
        <Card title="贡献排行" height="360px">
          <RankList />
        </Card>
      </el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="6">
        <Card title="访问来源" height="280px">
          <PieChart v-model="pieData" />
        </Card>
      </el-col>
      <el-col :span="6">
        <Card title="技能图谱" height="280px">
          <RadarChart />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="代码类型" height="280px">
          <BarChart v-model="barData" />
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
</style>
