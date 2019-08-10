import React, { Component } from 'react'
import axios from 'axios'
import '../../assets/scss/login.scss'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  
  componentDidMount() {
    axios.get('/api/user').then(response => {
      if (!response.data.error) {
        this.props.updateBalance(response.data.balance);
        this.props.updateName(response.data.name);
        this.props.updateUsername(response.data.username);
        this.setState({ redirect: true })
      }
    })
  }

  render() {
    return (
      <div className="login-body">
        <div className="circle login-circle">
          <i class="custom-vec fas fa-user-alt"></i>
        </div>
        <div className="modal">
          <div className="login-body-wrap">
            <div className="modal-name">User Login</div>
            <div className="input-group">
              <input placeholder="Username" type="text" name="username" />
              <input placeholder="Password" type="password" name="password" />
            </div>
            <Link to="/dashboard/home">
              <button className="signin-btn">Login</button>
            </Link>
            <div className="reg-query">Don't have an account?&nbsp;
              <Link className="blue-link" to='/profile'>
                Register here
              </Link>
            </div>
            <div className="login-footer">
              <Link to="/" className="footer-link">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
