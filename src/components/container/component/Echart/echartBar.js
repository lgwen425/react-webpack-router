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
    var option = {
        title: {
          text: 'Graph title',
          subtext: 'Graph Sub-text'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['sales', 'purchases']
        },
        toolbox: {
          show: false
        },
        calculable: false,
        xAxis: [{
          type: 'category',
          data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'sales',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint: {
            data: [{
              type: 'max',
              name: '???'
            }, {
              type: 'min',
              name: '???'
            }]
          },
          markLine: {
            data: [{
              type: 'average',
              name: '???'
            }]
          }
        }, {
          name: 'purchases',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint: {
            data: [{
              name: 'sales',
              value: 182.2,
              xAxis: 7,
              yAxis: 183,
            }, {
              name: 'purchases',
              value: 2.3,
              xAxis: 11,
              yAxis: 3
            }]
          },
          markLine: {
            data: [{
              type: 'average',
              name: '???'
            }]
          }
        }]
      };

    var pieOption = {
      }

      this.setState({
        option:option
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
