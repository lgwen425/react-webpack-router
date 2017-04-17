require('normalize.css/normalize.css');
require('../../../../styles/custom-sty.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';


export default class Modal extends Component{
  componentDidMount(){
    // <div className="m-panel">
    //   <div className="m-title">
    //     <h2>Collapsible</h2>
    //     <ul className="nav navbar-right panel_toolbox">
    //       <li className="dropdown">
    //         <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
    //           <i className="icon glyphicon glyphicon-cog"></i>
    //         </a>
    //         <ul className="dropdown-menu" role="menu">
    //           <li><a href="#">Settings 1</a>
    //           </li>
    //           <li><a href="#">Settings 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li><a className="close-link"><i className="icon glyphicon glyphicon-remove"></i></a>
    //       </li>
    //     </ul>
    //     <div className="clearfix"></div>
    //   </div>
    //   <div className="m-content">
    //     <Collapsible ids="colla3s"/>
    //   </div>
    // </div>
  }
  render(){
    return(
      <div className="m-panel">
        <div className="m-title">{this.props.title?this.props.title:'default'}</div>
        <div className="m-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
