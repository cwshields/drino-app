import React, { Component } from 'react';
import '../../assets/scss/profileCard.scss';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class ProfileCard extends Component {
  constructor() {
    super()
    this.state = {
      editing: false
    }
  }

  render() {
    const { firstName, lastName, email, img, description, jobTitle } = this.props
    console.log(this.props)
      return (
        <div className="profile-card">
          <div className="Card">
            <Card>
              <Card.Header className="card-header">
                {firstName} {lastName}
                <div className="card-header-subtext">{jobTitle}</div>
                <div className="img-wrap">
                  <img className="profile-img" src={img} alt="ProfileImage"/>
                </div>
              </Card.Header>
              <Card.Body className="card-body">
                <Card.Title>
                  {email}
                </Card.Title>
                  { this.state.editing === false 
                    ? <Card.Text>{description}</Card.Text>
                    : <input className="" />
                  }
                <Button variant="light"><i className="fas fa-edit"></i></Button>
                <Card.Text className="links">
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                  <i className="mr-10 fab fa-facebook-square"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com">
                  <i className="fab mr-10 fa-linkedin"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
  }
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    email: reduxState.reducer.email,
    img: reduxState.reducer.img,
    description: reduxState.reducer.description,
    jobTitle: reduxState.reducer.jobTitle
  }
}

export default connect(mapStateToProps)(ProfileCard);