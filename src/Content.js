import { TiDeleteOutline } from "react-icons/ti";
const Content = ({items,handlecheck,handledlete,iteml}) => {
  return (
    <main >
      {(items.length)?(
      <ul className="pt-6">
       {items.map(item=>(<li className="flex flex-row space-x-4  shadow shadow-blue-500/40 md:shadow-indigo-500/40 rounded-lg item " key={item.id}>
          <input type="checkbox" className="default:ring-4" 
                 checked={item.checked}
                 name={item.id}
                 onChange={()=>handlecheck(item.id)
                }
            />
            <label htmlFor={item.id} style={item.checked?{textDecoration:'line-through red 3px'}:null}>{item.item}</label>
            <button id={item.id} className="space-x-0.5" onClick={()=>handledlete(item.id)}><TiDeleteOutline /></button>
        </li>))}
      </ul>):(<p className="text-2xl text-center self-center" >
        your list is empty
      </p>)}      
    </main>
  )
}

export default Content