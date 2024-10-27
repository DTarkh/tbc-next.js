import "./Footer.css"

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/products">Products</a>
        </div>

        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
