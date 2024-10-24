import "./Footer.css"

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">YourStore</h3>
          <p className="footer-description">
            Your go-to online shop for high-quality products. Delivering excellence and customer satisfaction.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Contact Us</h4>
          <p>Email: <a href="mailto:support@yourstore.com">support@yourstore.com</a></p>
          <p>Phone: +123 456 789</p>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;