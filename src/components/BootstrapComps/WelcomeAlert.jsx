import React from 'react'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

function Welcome(props) {
  const { toggleShow, firstName, notifications, statusUpdates } = props
  return (
    <Alert variant="info" onClick={toggleShow} dismissible>
      <Alert.Heading>Welcome, {firstName} </Alert.Heading>
      <div className="wlcm-text-wrap">
      <p className="wlcm-text">
        This is the administrator dashboard for the Drino app. Here you can see cards with data pulled from the backend, 
        visualized statistics through the ChartJS package, and an RSS business news feed.
      </p>
      <hr/>
        <p className="wlcm-footer">
          You have
          <span className="dark-green"> <i className="fas fa-bell"></i> {notifications} notifications</span> and
          <span className="dark-yellow"> <i className="fas fa-exclamation-circle"></i> {statusUpdates} status updates</span>
        </p>
      </div>
    </Alert>
  )
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    notifications: reduxState.reducer.notifications,
    statusUpdates: reduxState.reducer.statusUpdates
  }
}

export default connect(mapStateToProps)(Welcome);
