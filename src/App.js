// 根组件
// 开发页面是不在根组件上开发的  是在根组件上动态的挂在子组件的 


// react-router可以让根组件动态的去挂载不同的其他组件
// 根据用户访问的地址动态的加载不同的组件
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/index.css';
import News from './components/News';
import Lifecycle from './components/Lifecycle';
import Home from'./components/Home';
import Axios from './components/Axios';
import FetchJsonp from './components/FetchJsonp';
import User from './components/User';
class App extends Component {
   // jsx语法  render模板
  render() {
    return (
      <Router>

         
      <div className="App">
      <div className='header'>
      <Link to='/news' className='link'>news</Link>
      <br/>
         <Link to='/user' className='link'>user</Link>
         </div>
        {/* <Home></Home> */}
        {/* <News></News> */}
        {/* <Axios></Axios> */}
        {/* <FetchJsonp></FetchJsonp> */}
        {/* <Lifecycle></Lifecycle> */}

        <Route exact path='/' component={Home}></Route>
        {/* <Route path='/news/' component={News}></Route> */}
        <Route path='/news' component={News}></Route>
        <Route path='/user' component={User}/>
        
        {/* <Route path='/fetch/:aid' component={FetchJsonp}></Route> */}
        <Route path='/fetch' component={FetchJsonp}></Route>

      </div>
      </Router>
    );
  }
}

export default App;
