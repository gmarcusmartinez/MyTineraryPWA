import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const formData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(formData)
    this.setState({
      email: '',
      password: ''
    })
  }
  render() {
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
                  <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="input-field">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
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
}
export default Login
