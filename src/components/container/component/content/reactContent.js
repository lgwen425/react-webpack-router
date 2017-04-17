require('normalize.css/normalize.css');
require('./reactContent.less');
require('../../../../styles/custom-sty.less');
import React ,{Component}from 'react';
import ReactDom from 'react-dom';

export default class ReactContnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray:[1,2,3,4,5,6],
      data:[{'url':'1','type':'卡牌类游戏','name':'《百家乐》'},
      {'url':'2','type':'卡牌类游戏','name':'《四川麻将》'},
      {'url':'3','type':'益智类游戏','name':'《梦幻西哟》'},
      {'url':'4','type':'网游类游戏','name':'《魔兽世界》'},
      {'url':'5','type':'竞技类游戏','name':'《英雄联盟》'},
      {'url':'6','type':'娱乐类游戏','name':'《斗地主》'}]
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount(){
  //  var styleObj =
  //获取当前Body的宽度

  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
  }
  componentDidMount(){
    $('html, body').animate({scrollTop:0},1);
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(e){
    // console.log(e.target.body.scrollTop);
    if(e.target.body.scrollTop>$('.header-doc')[0].clientHeight+50)
 		{
 			if(!$('header').hasClass('boxShadow')){
 				$('header').addClass('boxShadow');
 			}
 		}
  		else{
  			if($('header').hasClass('boxShadow')){
  				$('header').removeClass('boxShadow')
  			}
  		}
  }
  render(){
    let items = this.state.data.map((value)=>{
      var imageUrl = "../../../../images/g_"+value+".jpg";
      var image = require("../../../../images/g_"+value.url+".jpg");
      return (
        <div className="col-sm-4 col-xs-9 sm-padding">
          <div className="imageContainer">
            <figure className="imagefigure">
              <div className="bb">
                <img src={image}/>
                <p className="hoverDetail">{value.type}</p>
              </div>
              <p className="gameDetail">{value.name}</p>
            </figure>
          </div>
        </div>
      )
    });
    return(
      <div className="react-container">
        <div className="react-main">
            <h1 className="title t1"></h1>
            <div className="arrow"></div>
        </div>
        <div className="container">
          <div className="row">
            <ImageFigure data={this.state.data}/>
          </div>
        </div>
        <AboutUs/>
        <div className="container">
          <div className='row'>
            <ImageFigureBootStrap data={this.state.data}/>
          </div>
        </div>
        <div className="react-main">
            <h1 className="title t2"></h1>
            <div className="arrow"></div>
        </div>
        <div className="contact-us">
          <div className='row'>
            <div className="container">
              <div className="col-md-10 col-sm-10 col-xs-12 col-md-offset-1 col-sm-offset-1">
                <div className="m-panel">
                  <div className="m-title"><h4>title</h4></div>
                  <div className="m-content">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Default Input</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="Default Input"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Password</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="Password" className="form-control" placeholder="Password"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">AutoComplete</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="AutoComplete"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Company</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="Company Input"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Address Input</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="Address Input"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Phone Input</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="Phone Input"/>
                        </div>
                      </div>
                      <div className="solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          <button  className="btn btn-primary">Cancel</button>
                          <button  className="btn btn-success">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="react-main">
            <h1 className="title t2"></h1>
            <div className="arrow"></div>
        </div>
        <div className="ex">
          <div className="row">
            <div className="container">
              <div className="col-md-12 com-sm-12 col-xs-12">
                <p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p>
                <p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p>
                <p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p>

                <p><p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p></p>
                <div className="auto"><p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p></div>
                <div className="one">
                  段落文本段落文本段落文本段落文本段落文本段落文本段落文本
                  <p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p>
                  段落文本段落文本段落文本段落文本段落文本段落文本段落文本</div>
                <div className="two">
                  段落文本段落文本段落文本段落文本段落文本段落文本段落文本
                  <p>段落文本段落22222222文本段落文本段落文本段落文本段落文本段落文本</p>
                  段落文本段落文本段落文本段落文本段落文本段落文本段落文本</div>
                <div className="three">
                  段落文本段落文本段落文本段落文本段落文本段落文本段落文本
                  <p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p>
                  段落文本段落文本段落文本段落文本段落文本段落文本段落文本</div>

                <h1 className="run-in">run-in Ele</h1>
                <p>段落文本段落文本段落文本段落文本段落文本段落文本段落文本</p>

                <div className="positoin">
                  <div>ElementD</div>
                </div>
                <div >
                  <td>Name:</td>
                  <td><input type="text"/></td>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="react-main">
          <h1 className="title t2"></h1>
          <div className="arrow"></div>
      </div>
    );
  }
}
class ImageFigureBootStrap extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let items = this.props.data.map((value)=>{
        var image = require("../../../../images/g_"+value.url+".jpg");
        return(
          <div className="col-sm-6 col-md-4 col-xs-6">
            <div className="responsive">
              <div className="thumbnailContainer">
                <img src={image} alt={value.name}/>
                <p className="hover-bootstrap">{value.type}</p>
              </div>
              <div className="caption">
                <p>{value.name}</p>
              </div>
            </div>
          </div>
        )
    });
    return (
      <div>
        {items}
      </div>
    );
  }
}
class ImageFigure extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    let items = this.props.data.map((value)=>{
      var imageUrl = "../../../../images/g_"+value+".jpg";
      // console.log(imageUrl);
      var image = require("../../../../images/g_"+value.url+".jpg");
      return (
        <div className="col-sm-6 col-md-4 col-xs-6 sm-padding">
          <div className="imageContainer">
            <figure className="imagefigure">
              <div className="bb">
                <img src={image}/>
                <p className="hoverDetail">{value.type}</p>
              </div>
              <p className="gameDetail">{value.name}</p>
            </figure>
          </div>
        </div>
      )
    });
    return(
      <div>{items}</div>
    )
  }
}
