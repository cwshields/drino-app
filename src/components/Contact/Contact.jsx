import React, { Component } from "react";
import "../../assets/scss/contact.scss";

// import { connect, sendMessage } from "react-redux";
import axios from 'axios';
import DrinoNavbar from "../Navbar/DrinoNavbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Form, Col, Button } from "react-bootstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '', // this.props.firstName,
      lastName: '', // this.props.lastName,
      email: '', // this.props.email,
      message: '',
    };
  }

  postMessage = () => {
    const { firstName, lastName, email, message } = this.state;
    axios
      .post("/api/send-message", { firstName, lastName, email, message })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="contact-page">
        <DrinoNavbar></DrinoNavbar>
        <div className="contact-wrap">
          <h1>Contact</h1>
          <Jumbotron>
            <Form className="form">
              <Form.Row>
                <Col>
                  <Form.Control
                    required
                    onChange={this.handleChange}
                    value={this.state.firstName}
                    name="firstName"
                    className="form-input"
                    type="text"
                    placeholder="First name"
                  />
                </Col>
                <Col>
                  <Form.Control
                    required
                    onChange={this.handleChange}
                    value={this.state.lastName}
                    name="lastName"
                    type="text"
                    className="form-input"
                    placeholder="Last name"
                  />
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                  className="form-input"
                  type="text"
                  placeholder="email@example.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  name="message"
                  className="form-text"
                  type="text"
                  as="textarea"
                  rows="10"
                  placeholder="Write message here..."
                />
              </Form.Group>
            </Form>
            <Button className="submit-btn" onClick={this.postMessage}>
              Send Message
            </Button>
          </Jumbotron>
        </div>
      </div>
    );
  }
}