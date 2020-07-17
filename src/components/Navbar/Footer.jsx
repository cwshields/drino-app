import React from "react";
import '../../assets/scss/footer.scss'
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-wrap">
        <div className="text-wrap">
          <div className="label">Let's Stay In Touch</div>
          <div className="subtext">
            Subscribe for updates, special offers and more
          </div>
        </div>
        <div className="form">
          <input
            placeholder="email@brand.com"
            type="text"
            name="email"
            id="email"
          />
          <Button className="sign-up-btn" variant="success">Sign Up</Button>
        </div>
      </div>
      <div className="sm-btn-wrap">
        <Button className="sm-btn" variant="success">
          <i className="fab fa-facebook-f"></i>
        </Button>
        <Button className="sm-btn" variant="success">
          <i className="fab fa-twitter"></i>
        </Button>
        <Button className="sm-btn" variant="success">
          <i className="fab fa-linkedin-in"></i>
        </Button>
      </div>
      <div className="support">
        <div>Do you have a question? Send us a message:</div>
        <a href="mailto:cwshields2@gmail.com">
          <div className="green email">support@drino.live</div>
        </a>
      </div>
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} All rights reserved | Drino
        Technologies Inc.
      </div>
    </footer>
  );
};

export default Footer;
