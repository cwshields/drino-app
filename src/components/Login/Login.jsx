import React, { Component } from "react";
import axios from "axios";
import "../../assets/scss/login.scss";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateSession } from "../../Redux/reducer";
import { Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      show: false,
    };
  }

  login = () => {
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then(res => {
        this.props.updateSession(res.data);
      })
      .catch(err => console.log(err));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Login Credentials</Popover.Title>
        <Popover.Content>
          <div>
            <div className="instructions">Click username to copy to clipboard</div>
            <div className="help">
              <div>
                <strong>Admin</strong>
                <div className="" onClick={() => {navigator.clipboard.writeText("cwshields")}}>
                  User: cwshields
                  <Tooltip id="button-tooltip">
                    Copied!
                  </Tooltip>
                </div>
                <div>Pass: 1234</div>
              </div>
              <div className="mid">
                <strong>Employee</strong>
                <div className="" onClick={() => {navigator.clipboard.writeText("mpirouet1")}}>
                  User: mpirouet1
                  <Tooltip id="button-tooltip">
                    Copied!
                  </Tooltip>
                </div>
                <div>Pass: 1234</div>
              </div>
              <div>
                <strong>Customer</strong>
                <div className="" onClick={() => {navigator.clipboard.writeText("mhewertsonl")}}>
                  User: mhewertsonl
                  <Tooltip id="button-tooltip">
                    Copied!
                  </Tooltip>
                </div>
                <div>Pass: 1234</div>
              </div>
            </div>
          </div>
        </Popover.Content>
      </Popover>
    );
    const { login, isAdmin, isEmployee } = this.props;
    if (login === true && isAdmin === true) {
      return <Redirect to="/dashboard/home" />;
    } else if (login === true && isEmployee === true) {
      return <Redirect to="/profile" />;
    } else if (login === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-body">
        <div className="circle login-circle">
          <i className="custom-vec fas fa-user-alt"></i>
        </div>
        <div className="modal">
          {/*   
          { 
            this.props.login && this.state.isAdmin 
            ? <Redirect to="/dashboard/home" /> 
            : this.props.login && this.state.isEmployee 
            ? <Redirect to="/profile" />
            : this.props.login 
            ? <Redirect to="/"> 
          }    
        */}
          <div className="login-body-wrap">
            <div className="modal-name">User Login</div>
            <div className="input-group">
              <input
                placeholder="Username"
                type="text"
                name="username"
                onChange={this.handleChange}
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button className="signin-btn" onClick={this.login}>
              Login
            </button>
            <div className="reg-query">
              Don't have an account?&nbsp;
              <Link to="/" className="blue-link">
                Register here
              </Link>
            </div>
            <div className="login-footer">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <span className="footer-link">Need help?</span>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    username: reduxState.reducer.username,
    email: reduxState.reducer.email,
    isAdmin: reduxState.reducer.isAdmin,
    isEmployee: reduxState.reducer.isEmployee,
    img: reduxState.reducer.img,
    login: reduxState.reducer.login,
  };
}

export default connect(mapStateToProps, { updateSession })(Login);
