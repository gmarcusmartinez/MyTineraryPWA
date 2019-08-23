import React, { useEffect } from 'react'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'

const HowTo = ({ classes }) => {
  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.HowToCard}`}>
        <div className="flexContainer">
          <div>
            <h4
              className={`center red-text text-lighten-2 ${
                classes.HowToTitle
              }`}>
              Getting Started
            </h4>
            <p className={classes.HowToText}>
              Simply provide your itinerary a title, city and image to get
              started. The image can be from a link or you can choose one from
              your device.
            </p>
          </div>

          <div>
            <i className={`fas fa-plus ${classes.commonIcon}`} />
            <p className={classes.HowToText}>
              Once your itinerary is created you can add an activity by pressing
              this button. An activity only needs a title, location and image.
            </p>
          </div>

          <div>
            <i className={`fas fa-pencil-alt ${classes.commonIcon}`} />
            <p className={classes.HowToText}>
              Click the pencil to edit your itinerary's details as well as add
              more information.
            </p>
          </div>

          <div>
            <i className={`fas fa-list ${classes.commonIcon}`} />
            <p className={classes.HowToText}>
              Click the list to view , edit or delete activities from your
              itinerary.
            </p>
          </div>

          <div>
            <i className={`fas fa-trash-alt ${classes.commonIcon}`} />
            <p className={classes.HowToText}>
              If you want to delete the itinerary simply click the trash can and
              confirm.
            </p>
          </div>

          <div>
            <i className={`fas fa-cloud-upload-alt ${classes.uploadIcon}`} />
            <p className={classes.HowToText}>
              Once you have at least one activity you can publish your itinerary
              for the world to see. You can always unpublish them again so that
              you may edit them
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(HowTo)
