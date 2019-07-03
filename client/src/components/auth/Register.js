import { GoogleLogin } from 'react-google-login'
import React from 'react'

const Register = () => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse().id_token
    console.log({ idToken })
  }
  const onFailure = err => {
    console.log(err.details)
  }
  return (
    <div>
      <GoogleLogin
        clientId="490875079714-auqtvki99440jp3fb9vtuj664pmsct2b.apps.googleusercontent.com"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
      />
    </div>
  )
}

export default Register
