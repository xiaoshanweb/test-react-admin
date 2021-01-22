import React from 'react'
import ReactEcharts from 'echarts-for-react'

const option = {
  title: {
      text: '',
      left: 'left',
      top: 20,
      textStyle: {
          color: '#777'
      }
  },

  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    data: ['直接访问', '邮件营销', '联盟广告','视频广告','搜索引擎']
  },
  visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
          colorLightness: [0, 1]
      }
  },
  series : [
      {
          name:'访问来源',
          type:'pie',
          radius : '55%',
          center: ['50%', '50%'],
          data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:274, name:'联盟广告'},
              {value:235, name:'视频广告'},
              {value:400, name:'搜索引擎'}
          ].sort( (a,b) => a.value - b.value),
          roseType: 'angle',
          label: {
              normal: {
                  textStyle: {
                      color: '#777'
                  }
              }
          },
          labelLine: {
              normal: {
                  lineStyle: {
                      color: '#777'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
              }
          },
          itemStyle: {
              normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: '#777'
              }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: idx => Math.random() * 200
      }
  ]
}
export default () => (
  <ReactEcharts option={option} style={{height:'400px',width:'100%'}} className={'react_for_echarts'}/>
)