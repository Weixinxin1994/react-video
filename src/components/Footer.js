import React,{Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg:'我是footer'
      };
  }
  run=()=>{
    alert('我是footer的run方法');
  }
  render() {
    return (
      <div>
        <span >我是footer</span>
        <br/>
        <hr/>
      </div>
    );
  }
}

export default Footer;
