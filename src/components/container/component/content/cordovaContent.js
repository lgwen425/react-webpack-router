require('normalize.css/normalize.css');
require('./cordovaContent.less');
require('../../../../styles/custom-sty.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';
import {
  EchartBar,
  EchartLine,
  EchartPie,
  EchartGuage} from '../Echart';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    $('html, body').animate({scrollTop:0},1);
    window.addEventListener('scroll',this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
  }
  handleScroll(e){
    // console.log(e.target.body.scrollTop);
    if(e.target.body.scrollTop>$('.header-doc')[0].clientHeight+50)
 		{
 			if(!$('header').hasClass('boxShadow')){
 				$('header').addClass('boxShadow');
 			}
 		}
		else{
			if($('header').hasClass('boxShadow')){
				$('header').removeClass('boxShadow')
			}
		}
  }
  render(){
    return(
      <div className="cordova-container container">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-sm-12">
            <div className="m-panel">
              <div className="m-title">Graph title</div>
              <div className="m-content">
                <EchartBar ids="echartbar1s"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-sm-12">
            <div className="m-panel">
              <div className="m-title">echartPie1s</div>
              <div className="m-content">
                <EchartPie ids="echartPie1s"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div className="m-panel">
              <div className="m-title">Guage</div>
              <div className="m-content">
                <EchartGuage ids="echartGuage1s"/>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-8">
            <div className="m-panel">
              <div className="m-title">echartLine1s</div>
              <div className="m-content">
                <EchartLine ids="echartLine1s"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
