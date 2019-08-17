import React, { Component } from 'react'
import axios from 'axios'
import '../../assets/scss/login.scss'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateSession } from '../../Redux/reducer';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    axios.get('/api/user')
    .then(res => {
      this.props.updateSession(res.data)
    })
    .catch(err => console.log(err))
  }

  login = () => {
    const { username, password } = this.state
    axios
      .post('/auth/login', { username, password })
      .then((res) => {
        this.props.updateSession(res.data)
      })
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.props)
    if (this.props.login === true && this.props.isAdmin === true) {
      return <Redirect to='/dashboard/home' />
    }
    return (
      <div className="login-body">
        <div className="circle login-circle">
          <i className="custom-vec fas fa-user-alt"></i>
        </div>
        <div className="modal">
          {/* { this.state.isAdmin 
            ? <Redirect to="/dashboard/home" /> 
            : this.state.isEmployee 
            ? <Redirect to="/profile" /> 
            : null} */}
          <div className="login-body-wrap">
            <div className="modal-name">User Login</div>
            <div className="input-group">
              <input placeholder="Username" type="text" name="username" onChange={this.handleChange} />
              <input placeholder="Password" type="password" name="password" onChange={this.handleChange} />
            </div>
            <button className="signin-btn" onClick={this.login}>Login</button>
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

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    username: reduxState.reducer.username,
    email: reduxState.reducer.email,
    isAdmin: reduxState.reducer.isAdmin,
    isEmployee: reduxState.reducer.isEmployee,
    img: reduxState.reducer.img,
    login: reduxState.reducer.login
  }
}

export default connect(mapStateToProps, { updateSession })(Login);