require('normalize.css/normalize.css');
require('../../../../styles/custom-sty.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';


export default class Modal extends Component {
  render(){
    return(
      <div className="model-inlineBtn">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>

        <div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">Modal title</h4>
              </div>
              <div className="modal-body">
                <h4>Text in a modal</h4>
                <p>在我小的时候，我因家贫而身体很弱。我九岁才入学。因家贫体弱，母亲有时候想叫我去上学，又怕我受人家的欺侮，更因交不上学费，所以一直到九岁我还不识一个字。
                说不定，我会一辈子也得不到读书的机会。因为母亲虽然知道读书的重要，可是每月间三四吊钱的学费，实在让她为难</p>
                <p>.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" className="btn btn-primary">确定</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
