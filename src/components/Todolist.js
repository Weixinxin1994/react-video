// es6结构赋值
import React,{Component} from 'react';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'ssss'
         };
    }

    inputChange=(e)=>{
        this.state.username=e.target.value
    }
    render() {
        return (
            <div>
                {/* 非约束性组件： <input defaultValue={this.state.username}/>，这个defaultValue其实就是原生dom中的value属性
                   这样写出来的组件，其实是用户输入内容 react完全不管理出入过程。
            
                    约束性组件：<input value={this.state.username} onChang={}/>  这里value属性不再是一个写死的值，他是 this.state.username,
                    是由inputChange管理的，这时候实际上input的value根本不是本地用户输入的内容。而是onchange事件触发后，由this.setstate导致渲染产生的 ；
                    */}
                <input defaultValue={this.state.username}/>
                <input value={this.state.username} onChang={}/>
            </div>
        );
    }
}

export default Todolist;