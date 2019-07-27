import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import UserAvatar from '../common/UserAvatar'
// import MyTinerarySlider from './MyTinerarySlider'
import React, { Fragment, useEffect } from 'react'
// import CreateItinerary from '../modals/CreateItinerary'
import M from 'materialize-css/dist/js/materialize.min.js'
// import { getItinerariesByAuthUser } from '../../actions/itineraryActions'

const Dashboard = ({
  auth: { user }
  //   getItinerariesByAuthUser,
  //   itineraries
}) => {
  useEffect(() => {
    let elem = document.querySelector('.tooltipped')
    M.Tooltip.init(elem)

    // getItinerariesByAuthUser()
  }, [])
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col s12">
            {user && (
              <div>
                {/* <UserAvatar img={user.img} />{' '} */}
                <Link to="/settings">
                  <i
                    className="fas fa-plus red lighten-2 white-text update-img-btn tooltipped"
                    data-position="bottom"
                    data-tooltip="Update User Image"
                  />
                </Link>
              </div>
            )}
          </div>
          <div className="center">
            {user && (
              <p className="dashboard-welcome center-align">
                {' '}
                Welcome {user.name}!
              </p>
            )}
            <button
              className="btn create-itinerary-button red lighten-2 modal-trigger"
              data-target="create-itinerary-modal">
              Create Itinerary
            </button>
            {/* {itineraries.length > 0 && (
              <MyTinerarySlider itineraries={itineraries} />
            )} */}
          </div>
        </div>
      </div>

      <CreateItinerary />
    </Fragment>
  )
}
Dashboard.propTypes = {
  //   getItinerariesByAuthUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
  //   itineraries: state.itineraries.itineraries
})

export default connect(
  mapStateToProps,
  { getItinerariesByAuthUser }
)(Dashboard)
