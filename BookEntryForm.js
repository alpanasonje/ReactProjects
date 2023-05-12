import React from 'react'
import axios from 'axios'
import { useState } from "react";

function BookEntryForm() {
    const [Book, setBook]=useState({})
   
  const  onFormSubmit=(e)=>
    {
        console.log(Book)
        axios.post(`http://localhost:8082/books`,Book).then(
          (response)=>{
              console.log(response);
          },(error)=>{
              console.log(error);
          }
      )
      e.preventDefault();
    }
    
    
    

    return (
      <div><h1>Book Entry Form</h1>
      <form onSubmit={onFormSubmit}>
        <div >
        <label >Title : </label>
        <input type="text" placeholder='Enter Book Title'  onChange={(event)=>{
             setBook({...Book,title:event.target.value})
        }}/>
        </div>
        <div>
        <label>Author : </label>
        <input type="text" placeholder='Enter Book Author' onChange={(event)=>{
             setBook({...Book,author:event.target.value})
        }}></input>
        </div>
        <div>
        <label>Price : </label>
        <input type="text" placeholder='Enter Book Price'  onChange={(event)=>{
             setBook({...Book,price:event.target.value})
        }}></input>
        </div>
        <div>
            <br/><br/>
            <button type="submit" >Submit</button>
            <button type="reset" >Reset</button>
        </div>
    </form></div>
    )
  
}

export default BookEntryForm