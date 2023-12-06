import React from 'react'

const Search = ({search,setsearch}) => {
  return (
    <form className='searchForm' >
        <input type="text"
               role='search'
               id='search'
               placeholder='search'
               value={search}
               onChange={(e)=>{setsearch(e.target.value)}}
                />
        
    </form>
  )
}

export default Search