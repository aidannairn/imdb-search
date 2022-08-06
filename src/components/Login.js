import '../styles/login.css'

const Login = () => {
  return (
    <div id="login">
      <h2>Sign in to your account</h2>
      <form>
        <label>Email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button type='submit'>Login</button>
      </form>
      <p>Want to create an account? <a href="#">Click here!</a></p>
    </div>
  )
}

export default Login