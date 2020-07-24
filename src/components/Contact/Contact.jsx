import React, { Component } from "react";
import "../../assets/scss/contact.scss";
import Footer from "../Navbar/Footer";

// import { connect, sendMessage } from "react-redux";
import axios from "axios";
import DrinoNavbar from "../Navbar/DrinoNavbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      isSubmittable: false,
      message: "",
    };
  }

  postMessage = () => {
    const { firstName, lastName, email, message } = this.state
    if (this.state.isSubmittable === true) {
      axios
        .post("/api/send-message", { firstName, lastName, email, message })
        .then(res => console.log(res), this.setState({ message: "", isSubmittable: false }))
        .catch(err => console.log(err))
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // setTimeout seems to force state to update
    // without it, copy/paste, and selecting to delete does not update state
    setTimeout(() => {
      if (this.state.message.length >= 50 && this.state.message.length <= 500) {
        this.setState({ isSubmittable: true })
      } else {
        this.setState({ isSubmittable: false })
      }
    });
  }

  devlog = () => {
    console.log(this.state)
    console.log(this.props)
  }

  render() {
    const { firstName, lastName, email, message, isSubmittable } = this.state;
    return (
      <div className="drino">
        <DrinoNavbar></DrinoNavbar>
        <main>
          <div className="contact-container">
            <div className="contact-wrap">
              <div className="contact-form drino-form">
                <h1>Contact</h1>
                <Jumbotron>
                  <Form className="form">
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Control
                          required
                          onChange={this.handleChange}
                          value={firstName}
                          name="firstName"
                          className="form-input form-required"
                          type="text"
                          placeholder="First name"
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control
                          required
                          onChange={this.handleChange}
                          value={lastName}
                          name="lastName"
                          type="text"
                          className="form-input form-required"
                          placeholder="Last name"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Control
                        required
                        onChange={this.handleChange}
                        value={email}
                        name="email"
                        className="form-input form-required"
                        type="text"
                        placeholder="email@example.com"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        required
                        onChange={this.handleChange}
                        value={message}
                        name="message"
                        className="form-text form-required"
                        type="text"
                        as="textarea"
                        rows="10"
                        placeholder="Write message here..."
                      />
                      <div className="minimum">Min Length: 50</div>
                      <div
                        className={
                          isSubmittable ? "message-length" : "message-length red-text"
                        }
                      >
                        {message.length}/500
                      </div>
                    </Form.Group>
                  </Form>
                  <Button className=/*{this.props.login ? */"devlog"/* : "display-none"}*/ onClick={this.devlog}>Devlog</Button>
                  <Button
                    className={isSubmittable ? "submit-btn" : "submit-btn disabled"}
                    onClick={isSubmittable ? this.postMessage : null}
                  >
                    Send Message
                  </Button>
                  <div className="required">Required</div>
                </Jumbotron>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    email: reduxState.reducer.email,
    login: reduxState.reducer.login
  };
}

export default connect(mapStateToProps)(Contact);
