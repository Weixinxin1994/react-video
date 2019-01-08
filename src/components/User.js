import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Info from './User/Info'
import Main from './User/Main'
//  路由的模块化
let router=[{},{},{}];
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router>
            <div className='content'>
                 <div className='left'>
                 <Link  to='/user/' className=''>个人中心</Link><br/>
                 <Link to='/user/main' className=''>用户信息</Link>
                </div>
                <div className='right'>
                <Route exact path='/user/' 
                render={(props)=>(<Info {...props} route='BBBB'></Info>)}></Route> 
                
                {/* 这种方法实现父子组件传值 传给Main组件 route=‘aaa' */}
                <Route path={`${this.props.match.url}/main`} 
                     render={(props)=>( 
                        <Main {...props} route='aaa'></Main>
                )}></Route>
                </div>
            </div>
            </Router> 
        );
    }
} 

export default User;