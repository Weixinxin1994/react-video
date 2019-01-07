import React,{Component} from 'react'
import axios from 'axios'

class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  getData=()=>{
    // 通过axios获取服务器的数据
    var api = 'http://192.168.1.4:8080/v1/user/'
    axios.get(api)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
          <h1>Axios获取服务器数据</h1>
          <button onClick={this.getData}>获取服务器数据</button>
      </div>
    );
  }
}

export default Axios;