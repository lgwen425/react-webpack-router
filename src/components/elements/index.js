'use strict';

import React, { Component } from 'react';
import HeaderDoc from '../container/component/headerDoc/headerDoc';
import Content from '../container/component/content/elememt.js';

export default class Home extends Component {
  render(){
    return (
      		<div>
	    		<HeaderDoc
	    			headerStyle='home'
	    			title="Elements"
	    			detail="Elements基于Bootstrap，优化美观"/>
		    	<Content dataUrl="data"/>
	    	</div>
    )}
}
