import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header"
import React, { useState } from "react"
function App() {
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
    <div className="rounded-lg App ">
    <Header />
    <Content  items={items}
              handlecheck={handlecheck}
              handledlete={handledlete}
              />
    <Footer item={items}/>
    </div>
  );
}

export default App;
