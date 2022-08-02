import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="company">
        <img src="https://cdn.pixabay.com/photo/2016/03/31/20/07/cartoon-1295516_960_720.png" alt="" />
        <p>IMDB Search</p>
      </div>
      <div id="nav-options">
        <form id="nav-search-bar">
          <label>Search:</label>
          <input type="text" />
          <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
    </div>
  )
}

export default Navbar