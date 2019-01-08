import React, { Component } from 'react'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log(this.props.route)
    }
    render() {
        return (
            <div className='info'>
                我是个人中心组件
            </div>
        );
    }
}

export default Main;
