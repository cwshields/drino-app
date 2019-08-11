import React from 'react'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

function Welcome(props) {
  const { toggleShow, firstName, lastName, notifications, statusUpdates } = props
  return (
    <Alert variant="info" onClick={toggleShow} dismissible>
      <Alert.Heading>Welcome back, {firstName} {lastName}</Alert.Heading>
      <div className="welcome-text">
        You have&nbsp;
        <span className="dark-green"> <i className="fas fa-bell"></i> {notifications} notifications</span> and&nbsp;
        <span className="dark-yellow"><i className="fas fa-exclamation-circle"></i> {statusUpdates} status updates</span>
      </div>
    </Alert>
  )
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.firstName,
    lastName: reduxState.lastName,
    notifications: reduxState.notifications,
    statusUpdates: reduxState.statusUpdates
  }
}

export default connect(mapStateToProps)(Welcome);
