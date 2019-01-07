import React,{Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
import url from 'url'


// 动态路由传值:
// 1.<Route path='/fetch/:aid' component={FetchJsonp}></Route> 指定传值名称
// 2.<Link to={`/fetch/:{value.aid}`}>{value.name}</Link> 传入值
// 3.通过 this.props.match.params.aid获取到aid 的值

// get传值
// 1.<Route path='/fetch' component={FetchJsonp}></Route> 正常路由
// 2.<Link to={`/fetch?aid=${value.aid}`}>{value.name}</Link> 传入值 
// 3.通过this.props.location.search获取到参数的值(中间需要使用URL这个插件将数据解析从字符串里出来)




class FetchJsonp extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  getData=()=>{
    var api='http://192.168.1.4:8080/v1/user/'
    fetchJsonp(api)
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
  }
  // 生命周期函数 组件加载完成
  componentDidMount=()=>{
    // 获取动态路由的传值
    // console.log(this.props.match.params.aid)

    // get传值
    console.log(this.props.location.search)
   var aid = url.parse(this.props.location.search,true).query.aid;
   console.log(aid)


  }
  render() {
    return (
      
      <div>
      <h1>我是fetchJsonp获取服务器数据</h1>

      <hr/>
      <button onClick={this.getData}>fetchJsonp获取服务器数据</button>
      </div>
     
    );
  }
}

export default FetchJsonp;