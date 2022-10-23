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
      copied: false,
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

  copyText = (text) => {
    navigator.clipboard.writeText(text)
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 3000);
  }

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
                <div className="username" onClick={() => this.copyText("cwshields")}>
                  User: cwshields
                  { this.state.copied 
                    ? <Tooltip className="tooltip" id="button-tooltip">
                        Copied!
                      </Tooltip>
                    : null
                  }
                </div>
                <div>Pass: 1234</div>
              </div>
              <div className="mid">
                <strong>Employee</strong>
                <div className="username" onClick={() => this.copyText("mpirouet1")}>
                  User: mpirouet1
                  <Tooltip id="button-tooltip">
                    Copied!
                  </Tooltip>
                </div>
                <div>Pass: 1234</div>
              </div>
              <div>
                <strong>Customer</strong>
                <div className="username" onClick={() => this.copyText("mhewertsonl")}>
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
    if (login && isAdmin) {
      return <Redirect to="/dashboard/home" />;
    } else if (login && isEmployee) {
      return <Redirect to="/profile" />;
    } else if (login) {
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
            this.props.login && this.props.isAdmin 
            ? <Redirect to="/dashboard/home" /> 
            : this.props.login && this.props.isEmployee 
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
