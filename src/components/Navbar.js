import { useState } from 'react'

import '../styles/navbar.css'

const Navbar = ({ setSearchStr }) => {
  const [searchInput, setSearchInput] = useState('')
  const [areNavLinksVisible, setAreNavLinksVisible] = useState(true)
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)

  const handleSearchBtnClick = () => {
    setIsSearchBarVisible(!isSearchBarVisible)
  }

  const handleInputChange = e => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSearchStr(searchInput)
  }

  const handleHamburgerClick = e => {
    setAreNavLinksVisible(!areNavLinksVisible)
  }

  return (
    <div id="navbar">
      <div id="company">
        <img src="https://cdn.pixabay.com/photo/2016/03/31/20/07/cartoon-1295516_960_720.png" alt="" />
        <p>IMDB Search</p>
      </div>
      {areNavLinksVisible && 
        <div id="nav-options">
          {isSearchBarVisible 
            ? <form id="nav-search-bar" onSubmit={handleSubmit}>
              <input type="text" onChange={handleInputChange} />
              <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          : null}
          <p onClick={handleSearchBtnClick} >Search</p>  
          <a href="#">Home</a>
          <a href="#">About</a>
          <div id="login-btn"><p>Login</p></div>
        </div>
      }
      <div id="hamburger-icon" className={areNavLinksVisible ? 'open' : ''} onClick={handleHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar