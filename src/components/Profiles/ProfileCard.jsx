import React, { Component } from 'react';
import '../../assets/scss/profileCard.scss';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateDescription } from '../../Redux/reducer';

class ProfileCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editting: false,
      description: props.description
    }
  }

  toggleEdit = () => {
    if(this.state.editting === true) {
      this.setState({ editting: false })
    } else {
      this.setState({ editting: true })
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  saveChanges(id, description) {
    this.props.updateDescription(id, description)
    this.toggleEdit()
    // console.log(this.props);
  }

  render() {
    const { firstName, lastName, email, img, description, jobTitle } = this.props
    // console.log(this.state)
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
                  { this.state.editting === false 
                    ? <Card.Text>{description}</Card.Text>
                    : <div className="edit-wrap">
                        <textarea type="text" className="" name="description" value={this.state.description} onChange={this.handleInputChange}/>
                        <Button onClick={() => this.saveChanges(this.props.id, this.state.description)} className="save">Save</Button>
                      </div>
                  }
                <Button variant="light" onClick={this.toggleEdit}><i className="fas fa-edit"></i></Button>
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
    id: reduxState.reducer.id,
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    email: reduxState.reducer.email,
    img: reduxState.reducer.img,
    description: reduxState.reducer.description,
    jobTitle: reduxState.reducer.jobTitle
  }
}

export default connect(mapStateToProps, { updateDescription })(ProfileCard);