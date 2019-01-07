import React,{Component} from 'react'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      msg:'我是header'
     };
  };
  alerts=()=>{
    alert(this.props.title);
  }
  
  render() {
    return (
      <div>
        <span>我是header</span>
        <hr/>
        <br/>
        <button onClick={this.alerts}>获取父组件里的数据</button>
        <hr/>
<button onClick={this.props.news.getHeaderData.bind(this,this.state.msg)}>从子组件执行父组件的方法获取值</button>
      </div>
    );
  }
}

export default Header;