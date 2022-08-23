import React from 'react'

function SearchItem({search, setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e) => {e.preventDefault()}}>
        <label htmlFor="serach">Search</label>
        <input
            id="search"
            type="text"
            role="searchbox"
            placeholder='type here'
            value={search}
            onChange={(e) => { setSearch(e.target.value)}}
        ></input>
    </form>
  )
}

export default SearchItem