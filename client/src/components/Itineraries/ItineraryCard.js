import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import AddActivity from '../Forms/AddActivity'
import ActivitesList from '../Activities/ActivitiesList'
import { getActivities } from '../../store/actions/activityActions'
// import EditItinerary from './EditItinerary'
import {
  getItinerary,
  deleteItinerary
} from '../../store/actions/itineraryActions'

const ItineraryCard = ({
  itinerary,
  classes,
  getItinerary,
  getActivities,
  deleteItinerary
}) => {
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [showList, setShowList] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const displayAdd = () => {
    setShowAddActivity(true)
    setShowList(false)
    setShowConfirmDelete(false)
  }
  const displayList = () => {
    setShowAddActivity(false)
    setShowList(true)
    setShowConfirmDelete(false)
  }
  const displayConfirmDelete = () => {
    setShowAddActivity(false)
    setShowList(false)
    setShowConfirmDelete(true)
  }

  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.itineraryCard}`}>
        <div className="card-image">
          <img
            src={itinerary.img}
            alt=""
            style={{ filter: 'brightness(60%)' }}
          />
          <span className="card-title">{itinerary.title}</span>
        </div>
        <div className="card-content">
          <div className="center">
            <i
              className={`fas fa-pencil-alt ${classes.commonIcon}`}
              onClick={() => getItinerary(itinerary._id)}
            />
            <i
              className={`fas fa-list ${classes.commonIcon} activator`}
              onClick={() =>
                getActivities(itinerary._id).then(() => {
                  displayList()
                })
              }
            />
            <i
              className={`fas fa-plus ${classes.commonIcon} activator`}
              onClick={displayAdd}
            />
            <i
              className={`fas fa-trash-alt ${classes.commonIcon}`}
              onClick={() => deleteItinerary(itinerary._id)}
            />
          </div>
        </div>

        <div className="card-reveal" id="card-reveal">
          <span className="card-title">
            <i
              className="fas fa-times white-text right"
              style={{ fontSize: '1.5rem' }}
            />
          </span>
          {showList && <ActivitesList itinerary_id={itinerary._id} />}
          {showAddActivity && <AddActivity itinerary_id={itinerary._id} />}
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { getItinerary, deleteItinerary, getActivities }
)(withStyles(styles)(ItineraryCard))
