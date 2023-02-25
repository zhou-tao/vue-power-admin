import echarts, { ECOption } from '../useECharts'

export const options: ECOption = {
  //你的代码
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    valueFormatter: v => `${v}%`
  },
  grid: {
    top: '10%',
    left: '5%',
    right: '2%',
    bottom: '20%'
  },
  xAxis: [{
    type: 'category',
    data: ['TS', 'Vue', 'JS', 'Handlebars', 'HTML', 'SCSS', 'Shell', 'Markdown', 'JSON'],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
      fontSize: 12,
      color: '#6b7280',
      interval: 0
    }
  }],
  yAxis: [{
    name: '',
    type: 'value',
    axisLabel: {
      show: true,
      fontSize: 14
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#9ca3af40',
        type: 'dotted'
      }
    }
  }],
  series: [{
    name: '使用率',
    type: 'bar',
    data: [46, 32, 18.7, 11.1, 8.7, 6.1, 5.1, 4.1, 2.8],
    barWidth: 24,
    animationDuration: function (idx: any) {
      return idx * 500 + 1000
    },
    backgroundStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(230,104,78, 0.9)'
      },
      {
        offset: 0.9,
        color: 'transparent'
      }
      ], false),

      shadowColor: 'rgba(230,104,78, 0.9)',
      shadowBlur: 20
    },
    itemStyle: {
      borderRadius: [8, 8, 0, 0],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#fa714e'
      }, {
        offset: 1,
        color: '#e43346'
      }]),
      opacity: 1,
    }
  },
  ]
}

