<script setup lang="ts" name="Dashboard">
  import TotalCard from './components/TotalCard.vue'
  import { AreaChart } from '@c/ECharts'

  interface Card {
    title: string
    total: number
  }

  const cards: Card[] = [
    { title: 'Stars', total: 18823 },
    { title: 'Forks', total: 2311 },
    { title: 'Issues', total: 0 },
    { title: 'Pull Request', total: 8673 }
  ]
</script>

<template>
  <div page-base>
    <el-row :gutter="16" mb="4">
      <el-col :span="6" v-for="({ title, total }) in cards" :key="title">
        <TotalCard :title="title" :total="total">
          <template #icon>
            <i-ri-alarm-fill />
          </template>
        </TotalCard>
      </el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="18">
        <div h="80" bg="page" rounded>
          <AreaChart />
        </div>
      </el-col>
      <el-col :span="6"><div h="80" bg="page" rounded></div></el-col>
    </el-row>
    <el-row :gutter="16" mb="4">
      <el-col :span="12"><div h="60" bg="page" rounded></div></el-col>
      <el-col :span="6"><div h="60" bg="page" rounded></div></el-col>
      <el-col :span="6"><div h="60" bg="page" rounded></div></el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
