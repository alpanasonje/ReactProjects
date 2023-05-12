import React, { Component } from 'react'
import axios from 'axios'
class BookForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           title:"",
           author:"",
           price:""
        }
      }
      onTitleChange=event=>
      {
          this.setState({title:event.target.value})
      }
      onAuthorChange=event=>
      {
          this.setState({author:event.target.value})
      }
      onPriceChange=event=>
      {
          this.setState({price:event.target.value})
      }
      onFormSubmit=(e)=>
      {
          alert(`${this.state.title}, ${this.state.author}, ${this.state.price}`)
         
      
       
      }
      
      
      
    render() {
      return (
        <div><h1>Book Entry Form</h1>
        <form onSubmit={this.onFormSubmit}>
          <div >
          <label >Title : </label>
          <input type="text" placeholder='Enter Book Title' value={this.state.title} onChange={this.onTitleChange}></input>
          </div>
          <div>
          <label>Author : </label>
          <input type="text" placeholder='Enter Book Author' value={this.state.author} onChange={this.onAuthorChange}></input>
          </div>
          <div>
          <label>Price : </label>
          <input type="text" placeholder='Enter Book Price' value={this.state.price} onChange={this.onPriceChange}></input>
          </div>
          <div>
              <br/><br/>
              <button type="submit" >Submit</button>
              <button type="reset" >Reset</button>
          </div>
      </form></div>
      )
    }
}

export default BookForm