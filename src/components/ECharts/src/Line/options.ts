import echarts, { ECOption } from '../useECharts'

export const options: ECOption = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    },
  },
  legend: {
    show: true,
    top: '0%',
    itemWidth: 30,
    itemHeight: 10,
    textStyle: {
      color: '#6b7280',
      fontSize: 14
    }
  },
  grid: {
    top: '12%',
    left: '3%',
    right: '2%',
    bottom: '18%',
  },
  xAxis: [
    {
      type: 'category',
      axisLabel: {
        color: '#6b7280',
        fontSize: 14,
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false,
      },
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
  ],
  yAxis: [
    {
      name: '',
      nameTextStyle: {
        padding: [0, 60, 0, 0]
      },
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: '#9ca3af40',
          type: 'solid'
        },
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 14
      },
      axisTick: {
        show: false,
      }
    },
  ],
  series: [
    {
      name: '访问量',
      type: 'line',
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#00ffa2',
      },
      itemStyle: {
        color: '#00f0ff'
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
              color: '#00ffa230',
            },
            {
              offset: 0.6,
              color: '#00ffa220',
            },
            {
              offset: 1,
              color: '#00ffa210',
            },
          ],
          false
        ),
      },
      data: [20, 30, 40, 35, 34, 15, 46, 15, 12, 25, 34, 42],
    },
    {
      name: '下载量',
      type: 'line',
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#ffba00',
      },
      itemStyle: {
        color: '#fff600'
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
              color: '#ffba0030',
            },
            {
              offset: 0.6,
              color: '#ffba0020',
            },
            {
              offset: 1,
              color: '#ffba0010',
            },
          ],
          false
        ),
      },
      data: [40, 35, 34, 15, 46, 15, 12, 25, 34, 42, 20, 30,]
    }
  ]
}
