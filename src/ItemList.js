import React from "react"
import Lineitem from "./Lineitem"
const ItemList = ({items,handlecheck,handledlete}) => {
  return (
    <main>
    <ul className="pt-6">
         <Lineitem items={items}
                    handlecheck={handlecheck}
                    handledlete={handledlete}/>
         
        </ul>
    </main>
  )
}

export default ItemList