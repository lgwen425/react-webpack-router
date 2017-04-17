require('normalize.css/normalize.css');
require('./content.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';

export default class Content extends Component {
	constructor(props){
		super(props);
		this.state = {styleObj:"def",
		contentElID:[],toolElementCls:[],
		contentOffSetTop:[],
		contentl:[],
		fetchUrl:this.props.dataUrl}
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		var contentPage = $('.content-page');
		var pageToolbar = $('.page-toolbar ul>li');
		let contentPageID = [];
		let pageToolBarCls = [];
		let contentPageOffset = [];
		for(var i = 0;i<contentPage.length;i++){
			//content id
			contentPageID.push($(contentPage[i]).attr('id'))
			contentPageOffset.push($(contentPage[i])[0].offsetTop+$('.header-doc')[0].clientHeight+50);
		}
		for(var i = 0;i<pageToolbar.length;i++){
			//content id
			pageToolBarCls.push($(pageToolbar[i]));
		}

		this.setState({
			contentElID:contentPageID,
			toolElementCls:pageToolBarCls,
			contentOffSetTop:contentPageOffset
		});
		//
		//$(window).on('scroll',this.handleScroll.bind(this));
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillMount(){
//		var contentData = require('json!./data.json');
		let dataUrl = this.props.dataUrl +'.json';
		let contentData = require('json!./'+dataUrl);
		//处理
		var o  = [];
		for (var i =0;i<contentData.length;i++) {
			o.push(contentData[i]);
		}
		this.setState({contentl:o});
	}

	componentWillUnmount() {
		//$(window).off('scroll',this.handleScroll);
  	window.removeEventListener('scroll', this.handleScroll);
	}
	handleClick(e){
		if(!$(e.target).hasClass('active')){
			$('html, body').animate({scrollTop:$($(e.target).attr('class'))[0].offsetTop+$('.header-doc')[0].clientHeight+50}, 400);
		}
//		$(e.target).addClass('active');
//		$(e.target).siblings().removeClass('active')
	}
	handleScroll(e) {
  		//获取当前元素
			// console.log(e.target.body.scrollTop)
		if(e.target.body.scrollTop>$('.header-doc')[0].clientHeight+50)
 		{
 			this.setState({styleObj:'content-fix'});
 			if(!$('header').hasClass('boxShadow')){
 				$('header').addClass('boxShadow');
 			}
 			var offsetArray = [];
	  		for (var v=0;v<this.state.contentOffSetTop.length;v++) {
	  			offsetArray.push(Math.abs(e.target.body.scrollTop - this.state.contentOffSetTop[v]));
	  		}
	  		var minIndex = 0;
	  		var min = Math.min.apply(null, offsetArray)
	  		for (var j=0;j<offsetArray.length;j++) {
	  			//取最小值和index
	  			if(min == offsetArray[j]){
					$(this.state.toolElementCls[j]).addClass('active');
					$(this.state.toolElementCls[j]).siblings().removeClass('active')
	  			}
	  		}
 		}
  		else{
  			if($('header').hasClass('boxShadow')){
  				$('header').removeClass('boxShadow')
  			}
  			this.setState({styleObj:'def'});
  		}
  	}
  	render() {
  		var styleObject = this.state.styleObj+' '+'nav';
	    return (
	    	<div className="container">
		    	<div className="row">
		    		<div className="col-sm-9 ad">
			    		<PageContent oil={this.state.contentl}/>
		    		</div>
		    		<div className="col-sm-3 as page-toolbar" onScroll={this.onScrollHandle}>
		    			<nav className={styleObject}>
		    				<PageToolBar oil={this.state.contentl}/>
				        </nav>
		    		</div>
		    	</div>
      	</div>
	    );
  	}
}

class PageContent extends Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
//		this.props.oil.map((value,index)=>{
//		});
	}
	render(){
		let items = this.props.oil.map((value,index)=>{
					let steps = value.steps.map((sub)=>{
						if(typeof(sub.command)!="undefined"){
							return (
								<p>
									<h4>{sub.title}</h4>
									<p className="stepsDetail">{sub.detail}</p>
									<code className="stepsDetail">{sub.command}</code>
								</p>
							)
						}
						return (
							<p>
								<h4>{sub.title}</h4>
								<p className="stepsDetail">{sub.detail}</p>
							</p>
						)
					});
					return (
						<div className="content-page" id={value.id}>
		    				<h1 className="page-header">
		    					{value.title}
		    				</h1>
		    				<h1 className="page-header-a">
		    					{value.subTitle}
		    				</h1>
		    				<p>{value.detail}</p>
		    				<p>{
		    					steps
		    				}</p>
		    			</div>
					)
				});
		return(
			<div className='jhd'>
				{items}
			</div>

		);
	}
}
class PageToolBar extends Component{
	constructor(props){
		super(props);
	}
	handleClick(e){
		if(!$(e.target).hasClass('active')){
			$('html, body').animate({scrollTop:$($(e.target).attr('class'))[0].offsetTop+$('.header-doc')[0].clientHeight+50}, 400);
		}
	}
	render(){
		let items = this.props.oil.map((value)=>{
			let classname = '#'+value.id;
			return (
			 	<li onClick={this.handleClick.bind(this)} className={classname}>{value.title}</li>
			)
		});
		return(
			<ul className="nav">{items}</ul>
		);
	}
}
//默认属性
Content.defaultProps = {
};
//默认属性
PageContent.defaultProps = {
};
