import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header"
import React, { useState } from "react"
import Input from "./Input"
import Search from "./Search";

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
const [newitem,setnewitem]=useState('')
const additem=(item)=>{
  const id=items.length?items[items.length-1].id+1:0
  const addnewitem={id,item,checked:false}
  const list=[...items,addnewitem]
  setitem(list)
}
const handlesubmit=(e)=>{
  e.preventDefault()
  console.log("submited")
  additem(newitem)
  setnewitem('')
}
const [search,setsearch]=useState('')
const handlesearch=(e)=>{
  e.preventDefault()
  setnewitem('')
}
  return (
    <div className="rounded-lg App ">
    <Header />
    <Input
    newitem={newitem}
    setnewitem={setnewitem} 
    submit={handlesubmit}/>
    <Search search={search}
            setsearch={setsearch}/>
    <Content  items={items.filter(i=> ((i.item).toLocaleLowerCase()).includes(search.toLocaleLowerCase()))}
              handlecheck={handlecheck}
              handledlete={handledlete}
              />
    <Footer item={items}/>
    </div>
  );
}

export default App;
