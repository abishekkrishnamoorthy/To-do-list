
import ItemList from "./ItemList"


const Content = ({items,handlecheck,handledlete,iteml}) => {
  return (
    <main >
      
      {(items.length)? 
          (<ItemList items={items}
                    handlecheck={handlecheck}
                    handledlete={handledlete} />):
          (<p className="text-2xl text-center self-center" >your list is empty</p>)}  
              
    </main>
  )
}

export default Content