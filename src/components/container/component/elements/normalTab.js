require('normalize.css/normalize.css');
require('../../../../styles/custom-sty.less');
require('./tabs.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';
export default class NormalTab extends Component{
  render(){
    return(
      <div className="" role="tabpanel" data-example-id="togglable-tabs">
        <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
          <li role="presentation" className="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Home</a>
          </li>
          <li role="presentation" className=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Profile</a>
          </li>
          <li role="presentation" className=""><a href="#tab_content3" role="tab" id="profile-tab2" data-toggle="tab" aria-expanded="false">Profile</a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
            <p>Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
              synth. Cosby sweater eu banh mi, qui irure terr.</p>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
            <p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
              booth letterpress, commodo enim craft beer mlkshk aliquip</p>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
            <p>xxFood truck fixie locavore, accusamus mcsweeney\s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
              booth letterpress, commodo enim craft beer mlkshk </p>
          </div>
        </div>
      </div>
    )
  }
}
