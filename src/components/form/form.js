import React ,{Component}from 'react';
import ReactDom from 'react-dom';

export default class Form extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      	<form role="form text-center">
		  <div className="form-group">
		    <label for="exampleInputEmail1">邮箱：</label>
		    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="请输入您的邮箱地址"/>
		  </div>
		  <div className="form-group">
		    <label for="exampleInputPassword1">密码</label>
		    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="请输入您的邮箱密码"/>
		  </div>
		  <div className="checkbox">
		    <label>
		      <input type="checkbox"/> 记住密码
		    </label>
		  </div>
		  <button type="submit" className="btn btn-default">进入邮箱</button>
		</form>	

    );
  }
}
