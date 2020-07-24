import React from "react";
import '../../assets/scss/footer.scss'
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="subscribe-wrap">
          <div className="text-wrap">
            <div className="label">Let's Stay In Touch</div>
            <div className="subtext">
              Subscribe for updates, special offers and more
            </div>
          </div>
          <div className="form">
            <input
              aria-labelledby="email-signup"
              placeholder="email@brand.com"
              type="text"
              name="email"
              id="email"
            />
            <Button id="email-signup" className="sign-up-btn" variant="success">Sign Up</Button>
          </div>
        </div>
        <div className="sm-btn-wrap">
          <Button aria-label="facebook" className="sm-btn" variant="success">
            <i className="fab fa-facebook-f"></i>
          </Button>
          <Button aria-label="twitter" className="sm-btn" variant="success">
            <i className="fab fa-twitter"></i>
          </Button>
          <Button aria-label="linkedin" className="sm-btn" variant="success">
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
      </div>
    </footer>
  );
};

export default Footer;
