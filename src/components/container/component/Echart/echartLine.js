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
    // console.log(params);
    var lineOption = {
        title: {
          text: 'Line Graph',
          subtext: 'Subtitle'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 220,
          y: 40,
          data: ['Intent', 'Pre-order', 'Deal']
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {
              show: true,
              title: {
                line: 'Line',
                bar: 'Bar',
                stack: 'Stack',
                tiled: 'Tiled'
              },
              type: ['line', 'bar', 'stack', 'tiled']
            },
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
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'Deal',
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [10, 12, 21, 54, 260, 830, 710]
        }, {
          name: 'Pre-order',
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [30, 182, 434, 791, 390, 30, 10]
        }, {
          name: 'Intent',
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [1320, 1132, 601, 234, 120, 90, 20]
        }]
      }

      this.setState({
        option:lineOption
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
