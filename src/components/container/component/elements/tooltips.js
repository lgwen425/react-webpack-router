require('normalize.css/normalize.css');
require('../../../../styles/custom-sty.less');
require('./tooltips.less');
require('hint.css/hint.css');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';

export default class Tooltips extends Component {
  render(){
    return(
      <div className="hintBtn">
        <button type="button" aria-label="left" className="hint--left hint--rounded btn btn-info ">left</button>
        <button type="button" aria-label="top" className="hint--top hint--rounded btn btn-primary">top</button>
        <button type="button" aria-label="right" className="hint--right hint--rounded btn btn-warning">right</button>
        <button type="button" aria-label="bottom" className="hint--bottom hint--rounded btn btn-success">bottom</button>
        <button type="button" aria-label="top-left" className="hint--top-left btn btn-danger">top-left</button>
        <button type="button" aria-label="top-right" className="hint--top-right btn btn-danger">top-right</button>
        <button type="button" aria-label="bottom-left" className="hint--bottom-left btn btn-primary">bottom-left</button>
        <button type="button" aria-label="bottom-right" className="hint--bottom-right btn btn-default">bottom-right</button>
      </div>
    );
  }
}
