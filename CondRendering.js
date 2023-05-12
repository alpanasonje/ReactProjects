import React from 'react'

function CondRendering(props) {
  let n=props.num;
 /*  if(n%2==0)
  return (
    <div>Even Number</div>
  )
  else
  return(<div>Odd Number</div>) */

  /* let msg=""
  if (n%2==0)
    msg="Even Number"
else
msg="Odd Number"
return (<h1>{msg}</h1>) */

//return n%2==0?"Even":"Odd"

return (n%2==0 && <h1>Even</h1>)


}

export default CondRendering