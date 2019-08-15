import React, { Component } from 'react'
import logo from '../../assets/images/Drino-Logo.png'
import img from '../../assets/images/profile-img.png'
import '../../assets/scss/header.scss'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    }
  }

  collapseNavbar = () => {
    const currentState = this.state.collapsed;
    this.setState({ collapsed: !currentState })
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link to='/'>
          <div className="logo-wrap">
            <img className="nav-img" src={logo} alt="Logo" />
            <div className="logo-name">Drino</div>
          </div>
        </Link>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/dashboard/home">
              <Nav.Link>
                <i className="fas fa-tachometer-alt"></i>
                <div className="link-text">Dashboard</div>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard/users">
              <Nav.Link>
                <i className="fas fa-users"></i>
                <div className="link-text">Users</div>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard/messages">
              <Nav.Link>
                <i className="fas fa-comment-alt"></i>
                <div className="link-text">Messages</div>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard/maps">
              <Nav.Link>
                <i className="fas fa-map-marked-alt"></i>
                <div className="link-text">Maps</div>
              </Nav.Link>
            </LinkContainer>
            <div className="icon-pages-wrap">
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><i className="far yellow fa-circle"></i>404 Error</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><i className="far red fa-circle"></i>500 Error</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><i className="fas fa-user-circle"></i>Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><i className="fas fa-edit"></i>Register</NavDropdown.Item>
              </NavDropdown>
              <i className="fas fa-file-alt"></i>
            </div>
          </Nav>
          <div className="header-right-wrap">
            <LinkContainer to="/login">
              <Nav.Link>
                <i class="fas fa-sign-out-alt"></i>
                <div className="link-text">Logout</div>
              </Nav.Link>
            </LinkContainer>
            <img className="nav-img" src={img} alt="" />
          </div>
        </Navbar.Collapse>
      </Navbar>
      // <div className="header-navbar">
      //   <div className="nav-container">
      //     <Link to='/'>
      //       <div className="logo-wrap">
      //         <img className="nav-img" src={logo} alt="Logo" />
      //         <div className="logo-name-header">Drino</div>
      //       </div>
      //     </Link>
      //     <div className="mobile-menu"><i class="fas fa-bars"></i></div>
      //     <div className="header-right-wrap">
      //       <Link to="/login">
      //         <div className="nav-link">Logout</div>
      //       </Link>
      //       <img className="nav-img" src={img} alt="" />
      //     </div>
      //   </div>
      // </div>
    );
  }
}