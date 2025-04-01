import React from "react";
// import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="spacer"></div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about-us">
            <h2>About Us</h2>
            <p>
              Potato is a leading food delivery platform that connects you with
              your favorite restaurants, delivering delicious meals right to
              your doorstep. Our mission is to make food delivery quick,
              convenient, and enjoyable.
            </p>
          </div>
          <div className="footer-section contact-us">
            <h2>Contact Us</h2>
            <p>Email: support@potato.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
          <div className="footer-section address">
            <h2>Address</h2>
            <p>Potato Inc.</p>
            <p>Heaven</p>
            <p>Delicious City, FL 420</p>
          </div>
          <div className="footer-section social-media">
            <h2>Follow Us</h2>
            <a
              href="https://facebook.com/potato"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/potato"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/potato"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="footer-section links">
            <h2>Useful Links</h2>
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Potato Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
