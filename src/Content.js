
import ItemList from "./ItemList"


const Content = ({items,handlecheck,handledlete,fetcherr}) => {
  return (
    <>
      
      {(fetcherr==null)?(items.length)? 
          (<ItemList items={items}
                    handlecheck={handlecheck}
                    handledlete={handledlete} />):
          (<p className="text-2xl text-center self-center" >your list is empty</p>):fetcherr}  
              
    </>
  )
}

export default Content