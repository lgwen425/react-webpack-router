require('normalize.css/normalize.css');
require('./element.less');
require('../../../../styles/custom-sty.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';
import {
  NormalTabs,
  RightTabs,
  ModelLarge,
  ModelSmall,
  Collapsible,
  MPanel,
  Tooltips,
  TooltipsColor} from '../elements';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    $('html, body').animate({scrollTop:0},1);
    // 保存当前的scrollTop
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
      <div className="ele-container container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <MPanel title="Tabs">
              <ModelLarge/><ModelSmall/>
            </MPanel>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <MPanel title="Tabs">
              <NormalTabs/>
            </MPanel>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <MPanel title="Tabs">
              <RightTabs/>
            </MPanel>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <MPanel title="Collapsible1s">
              <Collapsible ids="colla1s"/>
            </MPanel>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <MPanel title="Collapsible2s">
              <Collapsible ids="colla2s"/>
            </MPanel>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <MPanel title="Tooltips">
              <Tooltips/>
            </MPanel>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <MPanel title="Color-Tooltips">
              <TooltipsColor/>
            </MPanel>
          </div>
        </div>
      </div>
    );
  }
}
