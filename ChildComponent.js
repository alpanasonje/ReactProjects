function ChildComponent(props)
    {
 
    return (
      <div>
        <button onClick={()=>props.greetHandler('Child')}>Click Here</button>


      </div>
    )
  
}

export default ChildComponent;