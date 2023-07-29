import * as echarts from 'echarts/core'
import type {
  LineSeriesOption,
  BarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption
} from 'echarts/charts'
import {
  LineChart,
  BarChart,
  PieChart,
  RadarChart
} from 'echarts/charts'
import type {
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  LegendComponentOption
} from 'echarts/components'
import {
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components'

import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

import { useSettingStore } from '@/store/modules/setting'
import { useThrottle } from '@/hooks/logic/useDelay'

export type ECOption = echarts.ComposeOption<
  BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | RadarSeriesOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
>

export type ChartInstance = echarts.ECharts
export type ChartDataset = DatasetComponentOption

// 注册必须的组件
echarts.use([
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default echarts

export function initChart(root: HTMLDivElement, options: ECOption) {
  const myChart = echarts.init(root)
  myChart.setOption(options)
  const settingStore = useSettingStore()
  watch(settingStore.isDark, (v) => {
    myChart.setOption({
      darkMode: v
    })
  }, {
    immediate: true
  })
  onResize(myChart, root)
  return myChart
}

export function setData(instance: ChartInstance, dataset: DatasetComponentOption) {
  if (!dataset) return
  instance.setOption({
    dataset
  })
}

export function onResize(instance: ChartInstance, root: HTMLDivElement) {
  const throttleResize = useThrottle(() => {
    if (instance.isDisposed()) {
      resizeObserver.disconnect()
      return
    }
    instance.resize({
      width: 'auto',
      height: 'auto'
    })
  }, 400)
  const resizeObserver = new ResizeObserver(() => throttleResize())
  resizeObserver.observe(root)
}
