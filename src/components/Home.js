// 组件文件名称首字母大写
import React,{Component}from 'react';




class Home extends Component{

// 构造函数
constructor(props){
    // 完成继承   props 用于父子组件传值 固定写法；；；；super必须在this之前  。。这是因为子类咩有自己的this对象，而是继承父类的this对象。
    super(props);
    this.state={
        name:'张三',
        age:'30',
        userinfo:{
            username:'花花'
        },
        sex:1,
        msg:"msg",
        list:['oo','dd','kk'],
        list2:[<h2>aa</h2>,<h2>bb</h2>,<h2>cc</h2>],
        list3:[{title:'11111',checked:true},{title:'22222',checked:false},{title:'33333333',checked:true}]
    }
    // 第二种改变this指向的方法
    this.getMessage=this.getMessage.bind(this)

};

run(event){
    alert('aaaaa');
    // event事件对象
    console.log(event);
    // event.target 获取执行事件的dom节点
    event.target.style.background='red';
    // 获取自定义属性值
    console.log(event.target.getAttribute('aid'))
};
getData(){
    // this指向问题
    alert(this.state.name)
};
getMessage(){
    alert(this.state.name)
};
// 使用箭头函数 this指向父元素
getName=()=>{
    alert(this.state.name)
};
setData=()=>{
    this.setState({
        name:"维信"
    })

};
setMessage=(msg)=>{
    this.setState({
        msg:msg
    })
};
inputChange=(e)=>{
    console.log(e.target.value)
    // e.target.value
    this.setState({
        name:e.target.value
    })
};
getInpuetVal=()=>{
    console.log(this.state.name)
};
inputChange2=()=>{

    // 获取dom节点
    // 1、给元素定义ref属性值
    // 2、通过this.refs.username获取dom节点的value值
    let val= this.refs.username.value;
    this.setState({
        username:val
    })
};
getInpuetVal2=()=>{
    console.log(this.state.username)
};
// 键盘事件
onKeyUp=(e)=>{
    console.log(e.keyCode)
    if(e.keyCode==13){
     console.log(e.target.value)
    }
}
handeSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.name)

};
changSex=(e)=>{
    // console.log(e.target.value)
    this.setState({
        sex:e.target.value
    })

};
handelCity=(e)=>{
 this.setState({
     city:e.target.value
 })
};
handel=(key)=>{
    var list3=this.state.list3;
    list3[key].checked=!list3[key].checked;
    this.setState({
        list3:list3
    })
    localStorage.setItem('todoList',JSON.stringify(list3))
}

// 生命周期函数
componentDidMount(){
    var list3=localStorage.getItem('list3');
    JSON.parse(list3);
    if(list3){
        this.setState({
            list3:list3
        })
        
    }
}

// 模板
    render(){
        // 多行代码要用（）
        // react组件里面的所有节点要被根节点包含起来
        // react绑定属性注意：
        // 1.class要换成classfor
        // 2.for要换成htmlfor
        // 3.style行内样式写法：style={{'color':'red'}}  大括号里加对象
        // 4.引入图片 用模块化引入import 或者  <img src={require('../assets/images/logo.svg')}/>  引入远程图片 <img src='http://xxxxxxx'/>
        // 

        // react没有数据双向绑定


        var listResult = this.state.list.map(function(value,key){
            return <li key={key}>{value}</li>
        })
        return (
        <div style={{'color':'red'}}>您好react,HOME组件{this.state.name}
        <button onClick={this.run} aid='llll'>qqqq</button>
        {/* 改变this指向  this.getData.bind(this)  */}
        <button onClick={this.getData.bind(this)}>bbbb</button>
        {/* 第二种改变this指向的方法 */}
        <button onClick={this.getMessage}>ffff</button>
        {/* 第三种改变this指向的方法 */}
        <button onClick={this.getName}>aaaaa</button>

        {/* 改变state里的值 */}
        <button onClick={this.setData}>改变name值</button>
        {/* 传参数的方法 */}
        <button onClick={this.setMessage.bind(this,'改变后的msg')}>改变msg值</button>
         <p title={this.state.name}>{this.state.msg}</p>
         <p className='red'>{this.state.userinfo.username}</p>
         <img src={require('../assets/images/logo.svg')}/>
         {this.state.list2}
         {listResult}

        /*模板里循环数据 */

         {
          this.state.list3.map(function(value,key){
              return <li key={key}>{value.title}</li>
          })   
         }


         <h2>表单事件</h2>
         {/* 获取表单的值                       
         1、监听表单的改变事件                onchange
         2、在改变的事件里获取表单输入的值     e.target.value获取
         3、把表单输入的值付给name            
         4、点击按钮的时候获取 state里面的name */}
         <input onChange={this.inputChange} /> <button onClick={this.getInpuetVal}>获取input的值</button>
           {/* 获取表单的值
         1、监听表单的改变事件
         2、在改变的事件里获取表单输入的值      ref获取
         3、把表单输入的值付给name
         4、点击按钮的时候获取 state里面的name */}
         <input ref='username' onChange={this.inputChange2} /> <button onClick={this.getInpuetVal2}>获取input的值</button>

        <h2>键盘事件</h2>
        <input onKeyUp={this.onKeyUp}/>  




        <form onSubmit={this.handeSubmit}>
        <input onChange={this.inputChange} /> <button onClick={this.getInpuetVal}>获取input的值</button>
        <input type='radio' value='1'checked={this.state.sex==1} onChange={this.changSex}/>男
        <input type='radio' value='2'checked={this.state.sex==2} onChange={this.changSex}/>女

        <select value={this.state.city} onChange={this.handelCity}>
        {
        this.state.list.map(function(value,key){
        return <option key={key}>{value}</option>
        })
        }

        </select>
        {
    
            this.state.list3.map((value,key)=>{
                return(
                    <div key={key}>
                    {value.title}
                    {/* 注意this指向问题 */}
                    <input type='checkbox' checked={value.checked} onChange={this.handel.bind(this,key)} />
                    </div>
                ) 

            })
        }

        
        </form>
        </div>
        )
    }
}
export default Home;

