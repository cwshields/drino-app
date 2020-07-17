import React from "react";
import DrinoNavbar from "../Navbar/DrinoNavbar";
import "../../assets/scss/App.scss";
import "../../assets/scss/drino.scss";
import "../../assets/fonts/micons/micons.css";
import logo from "../../assets/images/Drino-Logo.png";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import mobile3 from "../../assets/images/mobile3.png";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../../Redux/reducer";
import Footer from "../Navbar/Footer";
import photo from '../../assets/images/drino-photo-gradient.png';

function Drino() {
  return (
    <div className="drino">
      <DrinoNavbar></DrinoNavbar>
      <main>
        <div className="drino-container">
          <div className="stripe1"></div>
          <img className="drino-photo" src={photo} alt="Drino"/>
          <div className="drino-wrap">
            <div className="sect1">
              <div className="sect1-wrap">
                <div className="logo-wrap">
                  <img className="logo" src={logo} alt="Drino Logo" />
                  <div className="logo-name">Drino</div>
                </div>
                <div className="subtext">Everything you need. All in one.</div>
                <div className="text">
                  “You have to see failure as the beginning and the middle, but
                  never entertain it as the end.”
                </div>
                <div className="name">- Jessica Herrin</div>
              </div>
            </div>
            <div className="sect2">
              <div className="sect2-wrap">
                <div className="mobile-wrap">
                  <img className="sect2-img" src={mobile1} alt="Mobile One" />
                  <img className="sect2-img" src={mobile2} alt="Mobile Two" />
                </div>
                <div className="sect2-text">
                  The greatest humanity has to offer, in the palm of your hand.
                </div>
              </div>
            </div>
            <div className="sect3">
              <div className="group">
                <div className="item-feature__icon">
                  <i className="icon-upload"></i>
                </div>
                <div className="header">Cloud Storage</div>
                <div className="text">
                  Nam volu ptate recusan dae nemo ipsam assum enda vitae error,
                  eos facere porro maior es nesciut ipsa labore laudant.
                </div>
              </div>
              <div className="group">
                <div className="item-feature__icon">
                  <i className="icon-shield"></i>
                </div>
                <div className="header">Always Secure</div>
                <div className="text">
                  Harum consectetur iste fugit nihil quae, fugiat vel iure
                  possimus odit corrupti dolor sequi! Numquam ut asperiores sed.
                  Placeat facere et commodi.
                </div>
              </div>
              <div className="group">
                <div className="item-feature__icon">
                  <i className="icon-chat"></i>
                </div>
                <div className="header">Live Chat</div>
                <div className="text">
                  Blandi tiis porro eve niet voluptates nobis magnam, omnis quas
                  aperiam nes simus odit ciunt cupidi tate, expedi ta.
                </div>
              </div>
            </div>
            <div className="sect4">
              <div className="group">
                <div className="wrap1">
                  <div className="plan-label">Basic</div>
                  <div className="price">Free</div>
                  <ul>
                    <li>5GB Storage</li>
                    <li>10GB Bandwidth</li>
                    <li>5 Databases</li>
                    <li>30 Email Accounts</li>
                  </ul>
                  <Button variant="success">Get Started</Button>
                </div>
                <div className="wrap2">
                  <div className="plan-label">Pro Plan</div>
                  <div className="price">
                    $10<span className="per"> Per Month</span>
                  </div>
                  <ul>
                    <li>500GB Storage</li>
                    <li>Unlimited Bandwidth</li>
                    <li>50 Databases</li>
                    <li>50 Email Accounts</li>
                  </ul>
                  <Button variant="success">Get Started</Button>
                </div>
                <div className="wrap1">
                  <div className="plan-label">Premium Plan</div>
                  <div className="price">
                    $20<span className="per"> Per Month</span>
                  </div>
                  <ul>
                    <li>1TB Storage</li>
                    <li>Unlimited Bandwidth</li>
                    <li>100 Databases</li>
                    <li>100 Email Accounts</li>
                  </ul>
                  <Button variant="success">Get Started</Button>
                </div>
              </div>
            </div>
            <div className="stripe2"></div>
            <div className="sect5">
              <div className="group">
                <img src={mobile3} alt="ModelX Phone" />
                <div className="text">
                  <div className="brand">Innovision</div>
                  <div className="model">ModelX L5</div>
                  <div className="specs">5G 512GB - $899.99</div>
                </div>
              </div>
              <Button variant="success">Learn More</Button>
            </div>
          <div className="stripe3"></div>
          </div>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    login: reduxState.reducer.login,
    isAdmin: reduxState.reducer.isAdmin,
    isEmployee: reduxState.reducer.isEmployee,
  };
}

export default connect(mapStateToProps, { logout })(Drino);
