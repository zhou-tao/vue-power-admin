import type { ECOption } from '../useECharts'

// radar chart is not support dataset now!
export const option: ECOption = {
  color: ['#f43f5e', '#6366f1'],
  backgroundColor: 'transparent',
  tooltip: {},
  radar: {
    radius: '70%',
    center: ['50%', '45%'],
    splitNumber: 5,
    axisNameGap: 10,
    axisName: {
      color: '#6b7280'
    },
    axisLine: {
      lineStyle: {
        color: '#9ca3af40'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#9ca3af40'
      }
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(127, 95, 132, 0.2)',
        opacity: 1,
        shadowBlur: 45,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffsetX: 0,
        shadowOffsetY: 15
      }
    },
    indicator: [{
      name: 'Typescript',
      max: 100
    }, {
      name: 'Vue',
      max: 100
    }, {
      name: 'React',
      max: 100
    }, {
      name: 'Svelte',
      max: 100
    }, {
      name: 'Solid',
      max: 100
    }, {
      name: 'Tauri',
      max: 100
    }]
  },
  series: [{
    name: '熟练度',
    type: 'radar',
    symbolSize: 0,
    areaStyle: {
      shadowBlur: 13,
      shadowColor: 'rgba(0,0,0,.2)',
      shadowOffsetX: 0,
      shadowOffsetY: 10,
      opacity: 1
    },
    data: [{
      value: [80, 90, 80, 85, 60, 80],
      name: '2023年'
    }, {
      value: [90, 95, 45, 70, 80, 70],
      name: '2022年'
    }]
  }]
}
