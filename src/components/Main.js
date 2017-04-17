require('normalize.css/normalize.css');
require('styles/App.css');
import React ,{ Component }from 'react';
import ReactDom from 'react-dom';
import NavHeaderRou from './container/component/header/header';

export default class Main extends Component {
	componentDidMount(){
		// window.addEventListener('visibilitychange'，this.handleVisibilitychange.bind(this));
	}
	handleVisibilitychange(){
		//$('title').text()
	}
  render(){
    return (
      <div className="mainLoaded">
	    	<NavHeaderRou />
        <div className="main">
          {this.props.children}
        </div>

      </div>
    )
  }
}
