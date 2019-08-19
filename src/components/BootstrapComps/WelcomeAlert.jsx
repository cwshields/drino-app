import React from 'react'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

function Welcome(props) {
  const { toggleShow, firstName, lastName, notifications, statusUpdates } = props
  return (
    <Alert variant="info" onClick={toggleShow} dismissible>
      <Alert.Heading>Welcome back, {firstName} {lastName} </Alert.Heading>
      <div className="welcome-text">
        You have
        <span className="dark-green"> <i className="fas fa-bell"></i> {notifications} notifications</span> and
        <span className="dark-yellow"> <i className="fas fa-exclamation-circle"></i> {statusUpdates} status updates</span>
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
