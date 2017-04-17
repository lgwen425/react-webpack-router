require('normalize.css/normalize.css');
require('../../../../styles/custom-sty.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';
import Theme from '../Echart/theme.js'
var echarts = require('echarts');
export default class EchartEle extends Component {
  constructor(props) {
    super(props);
    this.state={
      theme:Theme.theme,
      option:{}
    }
  }
  componentWillMount(){
    // let dataUrl = this.props.dataUrl +'.json';
		// let contentData = require('json!./'+dataUrl);
		//
		// var o  = [];
		// for (var i =0;i<contentData.length;i++) {
		// 	o.push(contentData[i]);
		// }
    this.setOption(1,2,3,4,5,6,7,8,{'key':'dss'},[10,11,12]);
  }
  setOption(...params){
    var guageOption = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          show: true,
          feature: {
            restore: {
              show: true,
              title: "Restore"
            },
            saveAsImage: {
              show: true,
              title: "Save Image"
            }
          }
        },
        series: [{
          name: 'Performance',
          type: 'gauge',
          center: ['50%', '50%'],
          startAngle: 140,
          endAngle: -140,
          min: 0,
          max: 100,
          precision: 0,
          splitNumber: 10,
          axisLine: {
            show: true,
            lineStyle: {
              color: [
                [0.2, 'lightgreen'],
                [0.4, 'orange'],
                [0.8, 'skyblue'],
                [1, '#ff4500']
              ],
              width: 30
            }
          },
          axisTick: {
            show: true,
            splitNumber: 5,
            length: 8,
            lineStyle: {
              color: '#eee',
              width: 1,
              type: 'solid'
            }
          },
          axisLabel: {
            show: true,
            formatter: function(v) {
              switch (v + '') {
                case '10':
                  return 'a';
                case '30':
                  return 'b';
                case '60':
                  return 'c';
                case '90':
                  return 'd';
                default:
                  return '';
              }
            },
            textStyle: {
              color: '#333'
            }
          },
          splitLine: {
            show: true,
            length: 30,
            lineStyle: {
              color: '#eee',
              width: 2,
              type: 'solid'
            }
          },
          pointer: {
            length: '80%',
            width: 8,
            color: 'auto'
          },
          title: {
            show: true,
            offsetCenter: ['-65%', -10],
            textStyle: {
              color: '#333',
              fontSize: 15
            }
          },
          detail: {
            show: true,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            borderColor: '#ccc',
            width: 100,
            height: 40,
            offsetCenter: ['-60%', 10],
            formatter: '{value}%',
            textStyle: {
              color: 'auto',
              fontSize: 30
            }
          },
          data: [{
            value: 50,
            name: 'Performance'
          }]
        }]
      }

      this.setState({
        option:guageOption
      });
  }
  componentDidUpdate(){
    // console.log('update');
  }
  componentDidMount(){
    var echartBar = echarts.init($('#'+this.props.ids)[0], this.state.theme);
    echartBar.setOption(this.state.option);
  }
  render(){
    return(
      <div style={{height:350}} id={this.props.ids}>EchartEle</div>
    )
  }
}
