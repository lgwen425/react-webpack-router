
require('./header.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import {Motion, spring} from 'react-motion';
export default class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			text:"hello1",
//			headStyleOBJ:"home"
		}
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){
		/*
		//这是一个bootstrap的多级菜单，不要删掉
		<li className="dropdown">
				<a href="#" data-toggle="dropdown">cyan222<i className="caret"></i></a>
				<ul className="dropdown-menu">
						<li><a href="#">gao1</a></li>
						<li><a href="#">gao2</a></li>
						<li className="dropdown-submenu"><a href="#">gao3</a>
								 <ul className="dropdown-menu pull-left">
											<li><a href="#">qiao1</a></li>
											<li><a href="#">qiao2</a></li>
											<li><a href="#">qiao3</a></li>
								 </ul>
						</li>
				</ul>
		</li>
		*/
	}
	handleClick(e){
//		console.log("handleClick");
//		let styleName = $(e.target).attr('id');
//		this.setState({
//			headStyleOBJ:styleName
//		});
//		console.log();
	}
	handleChange(event){
		this.setState({text: event.target.value});
	}
  	render() {
  		let styleObj = /*this.state.headStyleOBJ+*/' '+'navbar'+ ' '+'navbar-fixed-top'+' '+ 'bs-docs-nav' ;
	    return (
	    	<header className={styleObj} id="top">
			  	<div className="container">
				    <div className="navbar-header">
				      	<button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
				      	</button>
				      	<a href="https://facebook.github.io/react/docs/hello-world.html"  target="_blank" className="navbar-brand">@React</a>
				    </div>
				    <nav id="bs-navbar" className="collapse navbar-collapse">
			      	<ul className="nav navbar-nav">
				        <li className="active" onClick={this.handleClick}>
				          	<a href="#" id="home">Home</a>
				        </li>
				        <li onClick={this.handleClick}>
				          	<Link to="/react" id="react">React</Link>
				        </li>
				        <li onClick={this.handleClick}>
				        	<Link to="/cordova" id="cordova">Echart</Link>
				        </li>
								<li onClick={this.handleClick}>
				        	<Link to="/elements" id="elements">elements</Link>
				        </li>

			      	</ul>
			      	<ul className="nav navbar-nav navbar-right">
				        <li><a href="http://www.lgwnet.online" target="_blank">@me</a></li>

				    	</ul>
				    </nav>
			  	</div>
			</header>
	    );
  	}
}
Header.defaultProps = {
};
