import React, { Component } from 'react'

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log(this.props)
    }
    render() {
        return (
            <div className='info'>
                我是用户信息组件
            </div>
        );
    }
}

export default Info;
