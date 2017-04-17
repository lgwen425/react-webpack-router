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
    var pieOption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
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
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '48%'],
          data: [{
            value: 335,
            name: 'Direct Access'
          }, {
            value: 310,
            name: 'E-mail Marketing'
          }, {
            value: 234,
            name: 'Union Ad'
          }, {
            value: 135,
            name: 'Video Ads'
          }, {
            value: 1548,
            name: 'Search Engine'
          }]
        }]
      }

      this.setState({
        option:pieOption
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
