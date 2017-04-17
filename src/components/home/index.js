'use strict';

import React, { Component } from 'react';
import HeaderDoc from '../container/component/headerDoc/headerDoc';
import Content from '../container/component/content/content';

export default class Home extends Component {
  render(){
    return (
      		<div>
	    		<HeaderDoc 
	    			headerStyle='home'
	    			title="Home"
	    			detail="Cordova提供了一组设备相关的API，通过这组API，移动应用能够以JavaScript访问原生的设备功能，跨平台"/>
		    	<Content dataUrl="data"/>
	    	</div>
    )}
}
