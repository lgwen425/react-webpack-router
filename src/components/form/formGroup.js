import React ,{Component}from 'react';
import ReactDom from 'react-dom';


export default class extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<form role = "form">
				<div className="form-group">
					<select className="form-control">
						<option value="">1</option>
						<option value="">2</option>
						<option value="">3</option>
						<option value="">4</option>
						<option value="">5</option>
						<option value="">6</option>
					</select>
				</div>
			</form>
		);
	}
}
