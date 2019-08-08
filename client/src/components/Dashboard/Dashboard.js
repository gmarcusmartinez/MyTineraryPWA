import { connect } from 'react-redux'
import UserAvatar from '../Common/UserAvatar'
import React, { Fragment, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const Dashboard = ({ auth: { user } }) => {
  useEffect(() => {
    let elem = document.querySelector('.tooltipped')
    M.Tooltip.init(elem)
  }, [])
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col s12">
            {user && (
              <div className="col s10 offset-s1 m8 offset-m2 ">
                <UserAvatar img={user.img} />
              </div>
            )}
          </div>
          <div className="center">
            <p
              className="center-align"
              style={{
                paddingTop: '30px',
                paddingBottom: '350px',
                fontFamily: 'Caveat',
                fontSize: '22px'
              }}>
              Welcome Back!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  {}
)(Dashboard)
