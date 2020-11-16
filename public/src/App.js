import React from 'react';
import $ from "jquery"
// import './temp.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.clearClick = this.clearClick.bind(this)
    this.isCanvasBlank = this.isCanvasBlank.bind(this)
    this.drawClick = this.drawClick.bind(this)
    this.state  = {
        bool : false
    }
  }
  componentDidMount() {
      var mcanvas = document.getElementById("mcanvas");    //获得画布
      mcanvas.width= 400;
      mcanvas.height = 400;
      mcanvas.style.border="1px solid red"
      mcanvas.style.position = 'absloute'  
      var mcontext = mcanvas.getContext("2d");    //获得上下文
      mcontext.strokeStyle = "#ff0000";    //设置画笔的颜色
      mcontext.lineWidth = 2;                //设置画笔的粗细
      mcontext.fillStyle = "#00ff00";        //设置填充图形的颜色


      mcanvas.onmousedown = function (e) {
        mcontext.moveTo(e.clientX-mcanvas.offsetLeft, e.clientY-mcanvas.offsetTop);
        // console.log(e.clientX, e.clientY)
        mcanvas.onmousemove = function (e) {  
          mcontext.lineTo(e.clientX-mcanvas.offsetLeft, e.clientY-mcanvas.offsetTop);   //底部的点
          mcontext.stroke();           //描边路径   
          // console.log(e.clientX, e.clientY)
        }
        mcanvas.onmouseup = function (e) {
          mcanvas.onmouseup = null;
          mcanvas.onmousemove = null
        }
      }
  }
  handleClick() {
    var mcanvas = document.getElementById("mcanvas");    //获得画布
    var s = mcanvas.toDataURL()
    console.log(s)
    if(this.state.bool){
      var a = document.createElement("a");
      a.href = s;
      a.download = 'name';
      a.click();
      return ;
    }else{
      return ;
    }


  }
  drawClick(){
    console.log('aaaaa')
    this.setState({
      bool:true
    })
  }
  isCanvasBlank(canvas){
    var blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
  }
  clearClick(){
    this.setState({
      bool:false
    })
    var c=document.getElementById("mcanvas");  
    var cxt=document.getElementById("mcanvas").getContext("2d");
    var width = $('#mcanvas').attr('width');    
	  $('#mcanvas').attr('width',0);    
    $('#mcanvas').attr('width',width);    
    cxt.clearRect(0,0,c.width,c.height);  
    cxt.strokeStyle="#ff0000";            //要重新指定，不然采用默认的黑色的背景
    cxt.lineWidth = 2;                //设置画笔的粗细
    cxt.fillStyle = "#00ff00";        //设置填充图形的颜色

  }
  render() {
    return (
      <div className="Temp">
          <canvas id="mcanvas" onClick={this.drawClick}>你的浏览器不支持canvas，请升级浏览器</canvas>
          <button id="btn" onClick={this.handleClick}>aaaaaa</button>
          <button id="btn1" onClick={this.clearClick}>bbbbb </button>
      </div>

    )
  }

}
export default App