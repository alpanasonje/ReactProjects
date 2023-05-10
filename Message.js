import React, { Component } from 'react'

class Message extends Component {
    constructor()
    {
        super();
        this.state={msg:"Welcome"}
    }
  render() {
    return (
      <div>{this.state.msg}
      <button onClick={()=>this.setState({msg:"Thank You!!"})}>Click Here</button></div>
    )
  }
}

export default Message