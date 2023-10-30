import './register.css'

function Register() {
  return (
      <div className='login'>
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">PostNow</h3>
                  <span className="loginDesc">Let your followers know what you have been upto</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder='Enter Username' type="text" className="loginBoxInput" />
                      <input placeholder='Enter your Email' type="email" className="loginBoxInput" />
                      <input placeholder='Enter password' type="password" className="loginBoxInput" />
                      <input placeholder='Confirm Password' type="password" className="loginBoxInput" />
                      <button className="loginButton">Sign Up</button>
                      <button className="loginRegisterButton">Login to your account</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Register;
