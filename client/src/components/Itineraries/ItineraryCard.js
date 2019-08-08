import { connect } from 'react-redux'
import React, { useState } from 'react'
import AddActivity from '../Forms/AddActivity'
import EditActivity from '../Forms/EditActivity'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import ActivitesList from '../Activities/ActivitiesList'
import ConfirmDeleteAct from '../Common/ConfirmDeleteAct'
import ConfirmDeleteItin from '../Common/ConfirmDeleteItin'
import { getActivities } from '../../store/actions/activityActions'
import { getItinerary } from '../../store/actions/itineraryActions'

const ItineraryCard = ({
  itinerary,
  classes,
  getItinerary,
  getActivities,
  displayEdit
}) => {
  const [showList, setShowList] = useState(false)
  const [showEditAct, setShowEditAct] = useState(false)
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [showConfirmDeleteAct, setShowConfirmDeleteAct] = useState(false)

  const displayAdd = () => {
    setShowList(false)
    setShowEditAct(false)
    setShowAddActivity(true)
    setShowConfirmDelete(false)
    setShowConfirmDeleteAct(false)
  }
  const displayList = () => {
    setShowList(true)
    setShowEditAct(false)
    setShowAddActivity(false)
    setShowConfirmDelete(false)
    setShowConfirmDeleteAct(false)
  }
  const displayConfirmDelete = () => {
    setShowList(false)
    setShowEditAct(false)
    setShowAddActivity(false)
    setShowConfirmDelete(true)
    setShowConfirmDeleteAct(false)
  }
  const displayConfirmDeleteAct = () => {
    setShowList(false)
    setShowEditAct(false)
    setShowAddActivity(false)
    setShowConfirmDelete(false)
    setShowConfirmDeleteAct(true)
  }
  const displayEditAct = () => {
    setShowList(false)
    setShowEditAct(true)
    setShowAddActivity(false)
    setShowConfirmDelete(false)
    setShowConfirmDeleteAct(false)
  }

  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.itineraryCard}`}>
        <div className="card-image">
          <img src={itinerary.img} alt="" className={classes.itineraryImg} />
          <span className="card-title">{itinerary.title}</span>
        </div>
        <div className="card-content" style={{ padding: '0px' }}>
          <div className={classes.flexContainer}>
            <div>
              <i
                className={`fas fa-pencil-alt ${classes.commonIcon}`}
                onClick={() =>
                  getItinerary(itinerary._id).then(() => {
                    displayEdit()
                  })
                }
              />
            </div>

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
              className={`fas fa-trash-alt ${classes.commonIcon} activator`}
              onClick={displayConfirmDelete}
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
          {showList && (
            <ActivitesList
              itinerary_id={itinerary._id}
              displayConfirmDeleteAct={displayConfirmDeleteAct}
              displayEditAct={displayEditAct}
            />
          )}
          {showAddActivity && <AddActivity itinerary_id={itinerary._id} />}
          {showConfirmDelete && (
            <ConfirmDeleteItin itinerary_id={itinerary._id} />
          )}
          {showConfirmDeleteAct && <ConfirmDeleteAct />}
          {showEditAct && <EditActivity />}
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { getItinerary, getActivities }
)(withStyles(styles)(ItineraryCard))
