// 根组件
// 开发页面是不在根组件上开发的  是在根组件上动态的挂在子组件的 

import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
import News from './components/News';

import Home from'./components/Home'
class App extends Component {
   // jsx语法  render模板
  render() {
    return (
      <div className="App">
        <Home></Home>
        <News></News>
      </div>
    );
  }
}

export default App;
