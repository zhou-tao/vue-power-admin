import type { ECOption } from '../useECharts'

export const option: ECOption = {
  color: ['#f59e0b', '#f43f5e', '#10b981', '#6366f1'],
  legend: {
    bottom: '10%',
    left: 'center',
    textStyle: {
      color: '#6b7280'
    }
  },
  series: [
    {
      type: 'pie',
      seriesLayoutBy: 'row',
      radius: ['35%', '65%'],
      center: ['50%', '40%'],
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
      }
    }
  ]
}
