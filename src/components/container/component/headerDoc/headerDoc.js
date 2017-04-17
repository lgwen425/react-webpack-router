require('normalize.css/normalize.css');
require('./headerDoc.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';

export default class HeaderDoc extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
//		console.log($('header').attr('class'));
		console.log('react');
		console.log('还不错哦');
		
	}
  	render() {
  		var styleObj = this.props.headerStyle+' '+'header-doc';
	    return (
	    	<div className={styleObj}>
	    		<div className="container">
	    			<h1>{this.props.title}</h1>
	    			<p>{this.props.detail}</p>
	    		</div>
	      	</div>
	    );
  	}
}
//默认属性
HeaderDoc.defaultProps = {
};
