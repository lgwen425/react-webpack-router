import React,{Component} from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../Main';

import Home from '../home';
import ReactHtml from '../react';
import Cordova from '../cordova';
import Elements from '../elements';
export default(
      <Route path="/" component={Main}>
		    <Route path="react" component={ReactHtml} />
		    <Route path="cordova" component={Cordova} />
        <Route path="elements" component={Elements} />
    		<IndexRoute component={Home} />
	  	</Route>
)
