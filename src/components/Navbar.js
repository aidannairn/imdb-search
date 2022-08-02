import { useState } from 'react'

import '../styles/navbar.css'

const Navbar = ({ setSearchStr }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleInputChange = e => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSearchStr(searchInput)
  }

  return (
    <div id="navbar">
      <div id="company">
        <img src="https://cdn.pixabay.com/photo/2016/03/31/20/07/cartoon-1295516_960_720.png" alt="" />
        <p>IMDB Search</p>
      </div>
      <div id="nav-options">
        <form id="nav-search-bar" onSubmit={handleSubmit}>
          <label>Search:</label>
          <input type="text" onChange={handleInputChange} />
          <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
    </div>
  )
}

export default Navbar