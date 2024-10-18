import "./Auth.css"

const AuthPage = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p className="auth-footer">Don't have an account? <a href="/auth/register">Register here</a></p>
    </div>
  )
}

export default AuthPage