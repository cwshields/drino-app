import React, { Component } from "react";
import { Form, Col, Button, Jumbotron } from "react-bootstrap";
import "../../assets/scss/register.scss";
import axios from "axios";
import _ from 'underscore';
import { Redirect } from "react-router-dom";
import DrinoNavbar from "../Navbar/DrinoNavbar";
import Footer from "../Navbar/Footer";

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        password2: '',
      },
      passError: undefined,
      profileImg: '',
      description: '',
      employee: false,
      admin: false,
      jobTitle: '',
      redirect: false,
    }
  }

  get validPass() {
    const { password, password2 } = this.state.userInfo
    if ( password === password2 ) {
      return true
    }
    return false
  }

  get greaterThan() {
    const { userInfo } = this.state
    let bool = 0
    for ( const prop in userInfo ) {
      if ( userInfo[prop].length > 3 ) {
        bool++
      }
      if ( userInfo[prop].length > 0 && userInfo[prop].length < 4 ) {
        bool--
      }
      else if ( bool === _.size(this.state.userInfo) ) {
        return true
      }
    }
    return false
  }

  get descLength() {
    if (this.state.description.length <= 160) {
      return true
    }
    return false
  }

  handleBool = (e) => {
    const { type, checked, value, name } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({ [name]: val });
    if (this.state.admin) {
      this.setState({ admin: false })
    }
  }

  handleOption = (e) => {
    this.setState({ jobTitle: e.target.value });
  }

  handleChange = (e) => {
    const { name, value, attributes } = e.target
    if ( attributes.getNamedItem('data-info') ) {
      this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })
    } else {
      this.setState({ [name]: value })
    }
  }

  checkPass = () => {
    this.setState({ passError: !this.validPass })
    console.log(this.validPass + "%c - password", 'color: #bada55');
  }
  
  submit = () => {
    const { firstName, lastName, email, username, password } = this.state.userInfo
    const { profileImg, description, employee, admin, jobTitle } = this.state
    if ( this.validPass && this.greaterThan && this.descLength ) {
      axios
        .post("/api/register/", 
        { firstName, lastName, email, username, password, 
          profileImg, description, employee, admin, jobTitle })
        .then(res => console.log(res), this.setState({ redirect: true }))
        .catch(err => console.log(err))
    }
  }

  devlog = () => {
    console.log(this.state)
    console.log(this.props)
  }
  
  render() {
    const { profileImg, employee, description, passError } = this.state
    if (this.state.redirect) {
      return <Redirect to="/login" />
    }
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
                          onBlur={this.checkValid}
                          data-info="userInfo"
                          className="form-input form-required"
                          type="text"
                          name="firstName"
                          placeholder="First name"
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control
                          onChange={this.handleChange}
                          className="form-input form-required"
                          data-info="userInfo"
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange}
                        className="form-input form-required"
                        data-info="userInfo"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange}
                        className="form-input form-required"
                        data-info="userInfo"
                        type="text"
                        name="username"
                        placeholder="Username"
                      />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Control
                          onChange={this.handleChange}
                          onBlur={this.checkPass}
                          data-info="userInfo"
                          className={
                            passError
                            ? "form-input form-error"
                            : "form-input form-required"
                          }
                          type="password"
                          name="password"
                          autoComplete="new-password"
                          placeholder="Password"
                          />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control
                          onChange={this.handleChange}
                          onBlur={this.checkPass}
                          data-info="userInfo"
                          className={ 
                            passError
                            ? "form-input form-error" 
                            : "form-input form-required"
                          }
                          type="password"
                          name="password2"
                          autoComplete="new-password"
                          placeholder="Re-type password"
                        />
                      </Form.Group>
                    </Form.Row>
                    <div className={ passError ? "form-row" : "display-none"}>
                      <div className="pass-warn">* Passwords are not identical</div>
                    </div>
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
                          this.descLength ? "message-length" : "message-length red-text"
                        }
                      >
                        {description.length}/160
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
                              <option value="Sales Representative">Sales Representative</option>
                              <option value="Front-end Web Developer">Front-end Web Developer</option>
                              <option value="Back-end Web Developer">Back-end Web Developer</option>
                              <option value="Consultant">Consultant</option>
                              <option value="Business Analyst">Business Analyst</option>
                              <option value="Financial Advisor">Financial Advisor</option>
                              <option value="Human Resources Specialist">Human Resources Specialist</option>
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
