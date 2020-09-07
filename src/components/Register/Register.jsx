import React, { Component } from "react";
import { Form, Col, Button, Jumbotron } from "react-bootstrap";
import "../../assets/scss/register.scss";
import axios from "axios";
import DrinoNavbar from "../Navbar/DrinoNavbar";
import Footer from "../Navbar/Footer";

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password1: '',
      password2: '',
      identicalPass: null,
      profileImg: '',
      description: '',
      employee: false,
      admin: false,
      jobTitle: '',
      isSubmittable: false,
    }
  }

  handleBool = (e) => {
    const { type, checked, value, name } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({ [name]: val });
  }

  isGreaterThan3 = (e) => {
    if (e.target.value > 3) {
      
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    this.isGreaterThan3(e)
  }

  handleOption = (e) => {
    this.setState({jobTitle: e.target.value});
  }

  checkPass = () => {
    const { password1, password2 } = this.state
    setTimeout(() => {
      if (password1 === password2) {
        this.setState({ identicalPass: true })
      } else {
        this.setState({ identicalPass: false })
      }
    });
  }
  
  submit = () => {
    const { firstName, lastName, email, username, password1, profileImg, description, employee, admin, jobTitle, isSubmittable } = this.state
    if (isSubmittable === true) {
      axios
        .post("/api/register", { firstName, lastName, email, username, password1, profileImg, description, employee, admin, jobTitle })
        .then(res => console.log(res), this.setState({ isSubmittable: false }))
        .catch(err => console.log(err))
    }
  }

  devlog = () => {
    console.log(this.state)
    console.log(this.props)
  }
  
  render() {
    const { profileImg, employee, isSubmittable, description } = this.state
    return (
      <div className="drino">
        <DrinoNavbar></DrinoNavbar>
        <main>
          <div className="reg-container">
            <div className="reg-wrap">
              <div className="reg-form drino-form">
                <h1>Register</h1>
                <Jumbotron>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Control
                          onChange={this.handleChange}
                          className="form-input form-required"
                          type="text"
                          name="firstName"
                          min="2"
                          placeholder="First name"
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control
                          onChange={this.handleChange}
                          className="form-input form-required"
                          type="text"
                          name="lastName"
                          min="2"
                          placeholder="Last name"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange}
                        className="form-input form-required"
                        type="email"
                        name="email"
                        min="4"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange}
                        className="form-input form-required"
                        type="text"
                        name="username"
                        min="4"
                        placeholder="Username"
                      />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Control
                          onChange={this.handleChange}
                          className="form-input form-required"
                          type="password"
                          name="password1"
                          min="4"
                          autoComplete="new-password"
                          placeholder="Password"
                          />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control
                          onChange={this.handleChange}
                          className="form-input form-required"
                          type="password"
                          name="password2"
                          min="4"
                          autoComplete="new-password"
                          placeholder="Re-type password"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className="img-url-wrap">
                      <div className="invalid">
                        Invalid <br/>
                          URL
                      </div>
                      { profileImg === '' 
                        ? <Form.Group className="img-div"><div className="img-filler"></div></Form.Group>
                        : <Form.Group className="img-div"><img src={profileImg} alt="" /></Form.Group>
                      }
                      <Form.Group className="img-url">
                        <Form.Control
                          name="profileImg"
                          onChange={this.handleChange}
                          className="form-input"
                          type="text"
                          placeholder="Profile image URL"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        onChange={this.handleChange}
                        name="description"
                        as="textarea"
                        rows="5"
                        placeholder="Describe yourself..."
                      />
                      <div
                        className={
                          description.length <= 150 ? "message-length" : "message-length red-text"
                        }
                      >
                        {description.length}/150
                      </div>
                    </Form.Group>
                    <Form.Check
                      id="check1"
                      type="checkbox"
                      name="employee"
                      checked={this.state.employee}
                      onChange={this.handleBool}
                      label="Employee account?"
                    />
                    { employee
                      ? <Form.Group>
                          <Form.Check
                            id="check2"
                            type="checkbox"
                            name="admin"
                            checked={this.state.admin}
                            onChange={this.handleBool}
                            label="Administrator account?"
                          />
                          <Form.Group className="option form-required">
                            <Form.Control onChange={this.handleOption} as="select" className="form-input">
                              <option defaultValue>Choose job title...</option>
                              <option value="1">Sales Representative</option>
                              <option value="2">Front-end Web Developer</option>
                              <option value="3">Back-end Web Developer</option>
                              <option value="4">Consultant</option>
                              <option value="5">Business Analyst</option>
                              <option value="6">Financial Advisor</option>
                            </Form.Control>
                          </Form.Group>
                        </Form.Group>
                      : null 
                    }
                    <div className="submit-button">
                      <Button variant="success" type="submit" onClick={this.submit}>
                        Submit
                      </Button>
                    </div>
                    <Button className=/*{this.props.login ? */"devlog"/* : "display-none"}*/ onClick={this.devlog}>Devlog</Button>
                  </Form>
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
