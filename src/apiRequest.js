const apiRequest=async(url='',option=null,errmsg=null)=>{
    try{
    const res =await fetch(url,option)
    if(!res.ok) throw Error("please reload data") 
    }
    catch(err){
      errmsg=err
    }
    finally{
     return errmsg
    }
}
export default apiRequest