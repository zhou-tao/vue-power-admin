import { ECOption } from '../useECharts'

export const options: ECOption = {
  color: ['#f59e0b', '#f43f5e', '#10b981', '#6366f1'],
  tooltip: {
    show: false
  },
  legend: {
    bottom: '10%',
    left: 'center',
    textStyle: {
      color: '#6b7280'
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['35%', '65%'],
      center: ['50%', '35%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '谷歌' },
        { value: 735, name: '百度' },
        { value: 580, name: '知乎' },
        { value: 484, name: 'B站' }
      ]
    }
  ]
}
