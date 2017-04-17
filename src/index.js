import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/route';
import { Router, hashHistory ,Route,IndexRoute} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';//引入bootstrap
import 'jquery/dist/jquery.js';//bootStrap依赖
import 'bootstrap/dist/js/bootstrap.js';


ReactDOM.render(
	<Router
	  history={hashHistory}
	  routes={routes}>
	</Router>, document.getElementById('app'));
$('#app').addClass('appLoaded');
