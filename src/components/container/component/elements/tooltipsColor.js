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
        <button className="status-icon btn btn-danger hint--bottom-right  hint--error"  aria-label="This is an error tooltip">
          Default
        </button>
        <button className="status-icon btn btn-success hint--bottom-right  hint--warning" aria-label="This is a warning tooltip">
          Warning
        </button>
        <button className="status-icon btn btn-primary hint--bottom-left  hint--info" aria-label="This is an info tooltip">
          Info
        </button>
        <button className="status-icon btn btn-danger hint--bottom-right  hint--success" aria-label="This is success tooltip">
          Success
        </button>
        <button className="status-icon btn btn-danger hint--bottom  hint--bounce" aria-label="Bounce">
          Bounce
        </button>
        <button className="status-icon btn btn-danger hint--right  hint--no-animate" aria-label="no-animation">
          no-animation
        </button>
      </div>
    );
  }
}
