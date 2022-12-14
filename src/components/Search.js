import { useState } from 'react'

import '../styles/search.css'

const Search = ({ setSearchStr }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleInputChange = e => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSearchStr(searchInput)
  }

  return (
    <div id="search-container">
      <h1>Looking For Some Entertainment?</h1>
      <h1>Browse movies, shows {'&'} games.</h1>
      <form id="search-bar" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>SEARCH</button>
        </form>
    </div>
  )
}

export default Search