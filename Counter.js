import React, { useState } from 'react'

function Counter() {
    const [count, setCount]=useState(100)
    
  return (
    <div>Counter
<button onClick={()=>setCount(count+1)}>Click {count} times</button>


    </div>
  )
}

export default Counter