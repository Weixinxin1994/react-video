
// react是React的核心库。
// reactDom是提供与dom相关的功能。

import React from 'react';
import ReactDOM from 'react-dom';
// css可以删掉
// import './index.css';

// 引入app.js这个组件
import App from './App';

// 不用管 加快react的运行速度的一个js文件
import * as serviceWorker from './serviceWorker';

// 将app组件渲染到页面上的root节点上
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
