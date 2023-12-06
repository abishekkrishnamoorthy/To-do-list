import React from "react"
import { TiDeleteOutline } from "react-icons/ti"

const Lineitem = ({items,handlecheck,handledlete}) => {
  return (
    <div>
        {items.map(item=>(<li className="flex flex-row space-x-4  shadow shadow-blue-500/40 md:shadow-indigo-500/40 rounded-lg item " key={item.id}>
            <input type="checkbox" 
                   checked={item.checked}
                   name={item.id}
                   onChange={()=>handlecheck(item.id)
                  }
              />
              <label htmlFor={item.id} style={item.checked?{textDecoration:'line-through red 3px'}:null}>{item.item}</label>
              <button id={item.id} className="space-x-0.5" onClick={()=>handledlete(item.id)}><TiDeleteOutline /></button>
          </li>))}
          </div>
  )
}

export default Lineitem