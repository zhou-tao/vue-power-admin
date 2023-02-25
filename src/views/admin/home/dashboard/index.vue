<script setup lang="ts" name="Dashboard">
  import RankList from './components/RankList.vue'
  import { AreaChart, BarChart, PieChart, RadarChart } from '@c/ECharts'
  import { useMessage } from '@/hooks/web/useMessage'

  const { $message } = useMessage()
  const dateType = ref('月')

  interface Card {
    title: string
    total: number,
    icon: string,
    cls?: string,
    hover?: string
  }

  const cards: Card[] = [
    { title: 'Stars', total: 99007, icon: 'ic:round-star', cls: 'text-5xl text-amber-5', hover: 'hover:text-amber-5' },
    { title: 'Forks', total: 1024, icon: 'ph:git-fork-bold', cls: 'text-rose-5', hover: 'hover:text-rose-5' },
    { title: 'Issues', total: 0, icon: 'octicon:issue-opened-16', cls: 'text-4xl text-green-5', hover: 'hover:text-green-5' },
    { title: 'Pull Request', total: 996, icon: 'ph:git-pull-request-bold', cls: 'text-indigo-5', hover: 'hover:text-indigo-5' }
  ]

  function handleQueryList() {
    $message.error('Notice: 996 ICU !')
  }
</script>

<template>
  <div page-base>
    <el-row :gutter="16" mb="4">
      <el-col :span="6" v-for="card in cards" :key="card.title">
        <TotalCard v-bind="card" @query-list="handleQueryList" />
      </el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="18">
        <Card title="热度趋势" height="320px">
          <AreaChart />
          <template #right>
            <el-radio-group v-model="dateType" mr="2">
              <el-radio-button label="年" />
              <el-radio-button label="月" />
            </el-radio-group>
          </template>
        </Card>
      </el-col>
      <el-col :span="6">
        <Card title="贡献排行" height="320px">
          <RankList />
        </Card>
      </el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="6">
        <Card title="访问来源" height="280px">
          <PieChart />
        </Card>
      </el-col>
      <el-col :span="6">
        <Card title="技能图谱" height="280px">
          <RadarChart />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="代码类型" height="280px">
          <BarChart />
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
</style>
