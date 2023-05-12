import React, { Component } from 'react'

export class EventHandler extends Component {
    render()
    {
        return(<div>
            <h1>{this.state.message}</h1>
           
            <button onClick={()=>this.clickHandler()}>Click</button>
 {/*    
  <button onClick={this.clickHandler}>Click</button>
 <button onClick={this.clickHandler.bind(this)}>Click</button>
      */}
        </div>)
    }       

     clickHandler(){
        this.setState({message:"GoodBye"})
    } 
    /*clickHandler=()=>
    {
        this.setState({message:"GoodBye"})
    }*/
    constructor()
    {
        super()
        this.state={message:"Hello"}
        this.clickHandler=this.clickHandler.bind(this)
    }
}

export default EventHandler
