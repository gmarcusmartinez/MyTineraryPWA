import React from 'react'

const Login = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="container">
          <div className="row">
            <div
              className="col s10 offset-s1 m8 offset-m2 l6 offset-l3"
              style={{ marginTop: '75px' }}>
              <div className="card form-card">
                <h4 className="red-text text-lighten-2 center card-title">
                  Login
                </h4>
                <form>
                  <div className="input-field">
                    <label>Email</label>
                    <input type="email" name="email" />
                  </div>
                  <div className="input-field">
                    <label>Password</label>
                    <input type="password" name="password" />
                  </div>
                  <button className="waves-effect waves-light btn red lighten-2 wide-btn z-depth-0 ">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
