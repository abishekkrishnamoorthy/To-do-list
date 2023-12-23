import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header"
import React, { useState,useEffect } from "react"
import Input from "./Input"
import Search from "./Search";
import apiRequest from "./apiRequest";

function App() {
  const api_url="http://localhost:5000/items"
  const [items,setitem]=useState([])
  const [fetcherr,setfetcherr]=useState(null)
  const [isloading, setisloading]=useState(true)
  useEffect (()=>{
    const fetch_data=async ()=>{
      try{
        const res=await fetch(api_url);
        if (!res.ok) throw new Error("error data")
        const listitem= await res.json()
        setitem(listitem)
        setfetcherr(null)
      } catch (err){
        setfetcherr(err.message)
      }
      finally{
        setisloading(false)
      }
      
    }
     setTimeout(() => {
      (async ()=> await fetch_data()) ()  
     }, 2000);
    
  }, [])
const handlecheck=async (id)=>{
 const listitem=items.map((item)=> item.id===id? {...item,checked:!item.checked}:item)
 setitem(listitem)
 const myitem=listitem.filter((i)=>i.id===id)
 const updateoption={
  method:'PATCH',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({checked:myitem[0].checked})
 }
 const requrl=`${api_url}/${id}`
 const result= await apiRequest(requrl,updateoption)
 if(result) setfetcherr(result)
}
const handledlete=async (id)=>{
const listitem=items.filter(item=> item.id !== id).map((item)=> item)
setitem(listitem)
const deleteoption={
  method:'DELETE'
 }
 const requrl=`${api_url}/${id}`
 const result= await apiRequest(requrl,deleteoption)
 if(result) setfetcherr(result)

}
const [newitem,setnewitem]=useState('')
const additem=async(item)=>{
  const id=items.length?items[items.length-1].id+1:0
  const addnewitem={id,item,checked:false}
  const list=[...items,addnewitem]
  setitem(list)
  const postoption={
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(addnewitem)
  }
  const result=await apiRequest(api_url,postoption)
  if(result) setfetcherr(result)
}
const handlesubmit=(e)=>{
  e.preventDefault()
  console.log("submited")
  additem(newitem)
  setnewitem('')
}
const [search,setsearch]=useState('')
  return (
    <div className="rounded-lg App ">
    <Header />
    <Input
    newitem={newitem}
    setnewitem={setnewitem} 
    submit={handlesubmit}/>
    <Search search={search}
            setsearch={setsearch}/>
    <main>
    {isloading && <p>loading items..</p>}
    {!isloading && <Content  items={items.filter(item => ((item.item)?.toLowerCase())?.includes(search?.toLowerCase()))}
              handlecheck={handlecheck}
              handledlete={handledlete}
              fetcherr={fetcherr}
              />}
    </main>
    <Footer item={items}/>
    </div>
  );
}

export default App;
