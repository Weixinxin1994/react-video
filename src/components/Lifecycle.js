import React from 'react';
// 组件加载的时候触发的生命周期函数
// 生命周期执行顺序: 1构造函数,2componentwillmount,3render,4componentdidmount;


// 组件数据更新的时候也会触发生命周期函数;
// shouleComponentUpdate  componentWillUpdate,render,componentDidMount

// 当父组件里改变props传值的时候触发 
// componentWillReceiveProps

// 组件销毁的时候触发
// componentWillUnmount
class Lifecycle extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {  };
  }
  // 组件将要挂载的时候触发的生命周期函数
  componentWillMount(){
    console.log('componentWillMount');
  }
  // 组件挂载完成的时候触发的生命周期函数
  componentDidMount(){
    
    // dom操作放在这里边,也就是在render后进行dom操作,不然找不到dom
    console.log('componentDidMount')
  }
setData=()=>{


}
  render() {
    console.log('render')
    return (
      <div>
        <h1>我是生命周期演示</h1>
<button onClick= {this.setData}></button>

      </div>
    );
  }
}

export default Lifecycle;