import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js'; 
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import '../assets/css/index.css';

// react的组件解决HTML标签构建应用的不足.
// 使用组件的好处:
// 将公共功能单独抽离成一个文件作为一个组件,哪里使用哪里引入就可以.
// 父子组件:
// 在组件的相互调用中,我们把调用者称为父组件,将被调用者称为子组件.
// 父子组件传值(react父子组件通信):
// 父组件给子组件传值:
// 在调用子组件的时候定义一个属性 在组件中通过 this.props.属性名 获取到父组件内的内容或者整个父组件对象
  


// defaultProps 父组件给子组件传值的时候,如果父组件调用子组件不给子组件传值,可以在子组件中使用defaultProps设定默认值
// propTypes验证父组件传值的合法性
    // 1.引入import PropTypes from 'prop-types';
    // 2.Header.proptypes={
    //    title:PropTypes.string
    // }
class News extends React.Component{
    constructor(props){
    
        super(props);
        this.state={
        news:"我是news,我是父组件",
        newsList:[
          {'aid':111,
            'name':'news111'
        },
        {
          'aid':222,
          'name':'news222'
        }
        ]
        }
    }
getHeaderData=(data)=>{
alert(data);
}
// 父组件主动获取子组件的数据
// 调用组件时制定ref的值 <Footer  ref='footer'></Footer>
// 通过this.refs.footer获取整个子组件实例  dom组件加载完之后获取
getFooter=()=>{
  // alert(this.refs.footer.state.msg)
  this.refs.footer.run();
}

    render(){
        return(
        // <Router>
        <div>
          {/* <Header title={this.state.news} news={this} />
          <ul>
              <li>aaa</li>
              <li>aaa</li> 
              <li>aaa</li>
              <li>aaa</li>
          </ul>
          {
            this.state.newsList.map((value,key)=>{
              // 
              // return (<Link to={`/fetch/:${value.aid}`}>{value.name}</Link>)
              // get 传值
              return (<Link to={`/fetch?aid=${value.aid}`}>{value.name}</Link>)
            })
          }
          <button onClick={this.getFooter}>获取子组件的this</button> */}


          <div className='content'>
                 <div className='left'>
                左侧
                </div>
                <div className='right'>
                右侧
                </div>
                
            </div>
        </div>
        // </Router>
        )
    }
}
export default News;