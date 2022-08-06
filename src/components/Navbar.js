import { useEffect, useState } from 'react'

import '../styles/navbar.css'

const Navbar = ({ setSearchStr, setIsModalVisible }) => {
  const [searchInput, setSearchInput] = useState('')
  const [areNavLinksVisible, setAreNavLinksVisible] = useState(false)
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  
  const getWindowWidth = () => window.innerWidth

  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    const handleWindowResize = () => {
      const width = getWindowWidth()

      setWindowWidth(width)

      if (width >= 768) {
        setAreNavLinksVisible(false)
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

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

  const handleLoginBtnClick = e => {
    setIsModalVisible(true)
  }

  return (
    <div id="navbar">
      <div id="company">
        <img src="https://cdn.pixabay.com/photo/2016/03/31/20/07/cartoon-1295516_960_720.png" alt="" />
        <p>IMDB Search</p>
      </div>
      {(areNavLinksVisible || (windowWidth > 768)) && 
        <div id="nav-options">
          <div className={`nav-option ${areNavLinksVisible ? 'open' : ''}`}>
          {isSearchBarVisible 
            ? <form id="nav-search-bar" onSubmit={handleSubmit}>
              <input type="text" onChange={handleInputChange} />
              <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          : null}
            <p onClick={handleSearchBtnClick} >Search</p>  
          </div>
          <div className={`nav-option ${areNavLinksVisible ? 'open' : ''}`}>
            <a href="#">Home</a>
          </div>
          <div className={`nav-option ${areNavLinksVisible ? 'open' : ''}`}>
            <a href="#">About</a>
          </div>
          <div onClick={handleLoginBtnClick} className={`nav-option ${areNavLinksVisible ? 'open' : ''}`}>
            <div id="login-btn"><p>Login</p></div>
          </div>
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