import React, { useState } from "react"
import { TiDeleteOutline } from "react-icons/ti";
const Content = () => {
     const [items,setitem]=useState([{
            id:1,
            item:"pawn",
            checked:true
     },{
      id:2,
      item:"bishop",
      checked:true
     },{
      id:3,
      item:"king",
      checked:false
     },{
      id:4,
      item:"queen",
      checked:false
}] )

  const handlecheck=(id)=>{
         const listitem=items.map((item)=> item.id===id? {...item,checked:!item.checked}:item)
         setitem(listitem)
         localStorage.setItem("to-do-list",JSON.stringify(listitem))
         
  }
  const handledlete=(id)=>{
        const listitem=items.filter(item=> item.id !== id).map((item)=> item)
        setitem(listitem)
        localStorage.setItem("to-do-list",JSON.stringify(listitem))
        
  }
  return (
    <main >
      <ul className="pt-6">
       {items.map(item=>(<li className="flex flex-row space-x-4  shadow shadow-blue-500/40 md:shadow-indigo-500/40 rounded-lg item " key={item.id}>
          <input  type="checkbox" className="default:ring-4" 
                 checked={item.checked}
                 name={item.id}
                 onChange={()=>handlecheck(item.id)}
            />
            <label htmlFor={item.id} style={item.checked?{textDecoration:'line-through'}:null}>{item.item}</label>
            <button id={item.id} className="space-x-0.5" onClick={()=>handledlete(item.id)}><TiDeleteOutline /></button>
        </li>))}
      </ul>      
    </main>
  )
}

export default Content