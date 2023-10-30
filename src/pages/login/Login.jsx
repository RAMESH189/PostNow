import './login.css'

function Login() {
  return (
      <div className='login'>
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">PostNow</h3>
                  <span className="loginDesc">Let your followers know what you have been upto</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder='Enter your Email' type="email" className="loginBoxInput" />
                      <input placeholder='Enter your password' type="password" className="loginBoxInput" />
                      <button className="loginButton">Log in</button>
                      <span className="forgotPassword">Forgot password?</span>
                      <button className="loginRegisterButton">Create new account</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Login;
