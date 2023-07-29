import type { ECOption } from '../useECharts'
import echarts from '../useECharts'

export const getOption = (colors: string[][]): ECOption => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    }
  },
  legend: {
    show: true,
    top: 0,
    itemWidth: 30,
    itemHeight: 10,
    textStyle: {
      color: '#6b7280',
      fontSize: 14
    }
  },
  grid: {
    top: '11%',
    left: '4%',
    right: '2%',
    bottom: '18%'
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      color: '#6b7280',
      fontSize: 14
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    nameTextStyle: {
      padding: [0, 60, 0, 0]
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#9ca3af40',
        type: 'solid'
      }
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: true,
      fontSize: 14
    },
    axisTick: {
      show: false
    }
  },
  series: Array(2).fill(0).map((_, i) => ({
    type: 'line',
    seriesLayoutBy: 'row',
    symbol: 'circle',
    smooth: true,
    lineStyle: {
      width: 3,
      color: colors[i][0]
    },
    itemStyle: {
      color: colors[i][1]
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          {
            offset: 0,
            color: `${colors[i][0]}30`
          },
          {
            offset: 0.6,
            color: `${colors[i][0]}20`
          },
          {
            offset: 1,
            color: `${colors[i][0]}10`
          }
        ],
        false
      )
    }
  }))
})
