import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
const Input = ({submit,newitem,setnewitem}) => {
  return (
      <form className='addForm' onSubmit={submit}>
        <label htmlFor="additem">
            additem
        </label>
        <input autoFocus
              type="text"
               id="additem"
               placeholder='add Item'
               value={newitem}
               onChange={(e)=>{setnewitem(e.target.value)}}
               required
                />
        <button type='submit'
                aria-label='additem' className='text-4xl hover:text-3xl active:bg-orange-700/10 focus:outline-none rounded-full'>
                  <IoAddCircleOutline />
                </button>
    </form>
  )
}

export default Input