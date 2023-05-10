import React, { Component } from 'react'

class Student extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         rollno:1,
         name:"Pooja",
         per:78
      }
    }
  render() {
    return (
      <div>Student Details are as follows: <br/>
      Roll No: {this.state.rollno} <br/>
      Name : {this.state.name}<br/>
      Per : {this.state.per} <br/>
      <button onClick={()=>this.setState({per:this.props.percentage})}>Update</button></div>
    )
  }
}

export default Student