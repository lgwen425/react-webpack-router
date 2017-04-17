'use strict';

import React, { Component } from 'react';
import HeaderDoc from '../container/component/headerDoc/headerDoc';
import Content from '../container/component/content/reactContent.js';

export default class Home extends Component {
  render(){
    return (
      		<div>
		    		<HeaderDoc
		    			headerStyle='react'
		    			title="React"
		    			detail="全新的一种设计模式，虚拟dom，全新的dom生命周期，动态生成，数据的双向驱动，state和props的全新应用"/>
			    	<Content dataUrl="react"/>
		    	</div>
    )}
}
