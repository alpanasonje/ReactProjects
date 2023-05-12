import React from 'react'

function NameList() {
    const names=["Neha","Nikita","Sakshi"];
    const list=names.map(s=><h2>{s}</h2>)
    const uniqueList =names.map((s,index)=><h3 key={index}>{index} : {s}</h3>)
    const students=[{rollNo:1, name:"Prithvi", per:78}, {rollNo:2, name:"Pankaj", per:78}, {rollNo:3, name:"Madhur", per:68},{rollNo:4, name:"Rishi", per:81}, {rollNo:5, name:"Meet", per:86}]
    const sList=students.map((student) => (<h2 key={student.rollNo}>I am {student.name} got {student.per}%</h2>))
  return (
    <div>Names : {list}
    Unique List : {uniqueList}
    Students List :{sList}</div>
  )
}

export default NameList