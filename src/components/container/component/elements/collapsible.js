require('normalize.css/normalize.css');
require('../../../../styles/custom-sty.less');
require('./collapsible.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';

export default class Coll extends Component {
  render(){
    let Id1 = this.props.ids+"accordion";
    let Id2 = '#'+this.props.ids+"accordion";
    let eleID1 = this.props.ids+'One';
    let eleID2 = this.props.ids+'Two';
    let eleID3 = this.props.ids+'Three';
    let eleHeadID1 = this.props.ids+'HeadOne';
    let eleHeadID2 = this.props.ids+'HeadTwo';
    let eleHeadID3 = this.props.ids+'HeadThree';
    let eleID1Href = '#'+this.props.ids+'One';
    let eleID2Href = '#'+this.props.ids+'Two';
    let eleID3Href = '#'+this.props.ids+'Three';
    return(
      <div className="accordion" id={Id1} role="tablist" aria-multiselectable="true">
        <div className="panel">
          <a className="panel-heading" role="tab" id={eleHeadID1} data-toggle="collapse" data-parent={Id2} href={eleID1Href} aria-expanded="true" aria-controls="collapseOne">
            <h4 className="panel-title">Collapsible Group Items #1</h4>
          </a>
          <div id={eleID1} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="panel">
          <a className="panel-heading collapsed" role="tab" id={eleHeadID2} data-toggle="collapse" data-parent={Id2} href={eleID2Href} aria-expanded="false" aria-controls="collapseTwo">
            <h4 className="panel-title">Collapsible Group Items #2</h4>
          </a>
          <div id={eleID2} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">
              <p><strong>Collapsible Item 2 data</strong>
              </p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
            </div>
          </div>
        </div>
        <div className="panel">
          <a className="panel-heading collapsed" role="tab" id={eleHeadID3} data-toggle="collapse" data-parent={Id2} href={eleID3Href} aria-expanded="false" aria-controls="collapseThree">
            <h4 className="panel-title">Collapsible Group Items #3</h4>
          </a>
          <div id={eleID3} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">
              <p><strong>Collapsible Item 3 data</strong>
              </p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
            </div>
          </div>
        </div>
      </div>

    )
  }
}
