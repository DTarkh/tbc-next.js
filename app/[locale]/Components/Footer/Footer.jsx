
import "./Footer.css"
import {useTranslations} from 'next-intl';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  const t = useTranslations('Navigation');
  return (
    <footer className="footer bg-amber-100 dark:bg-black dark:bg-opacity-90" >
      <div className="footer-content">
      <div className="footer-bottom">
        <p className="dark:text-zinc-200" >&copy; 2024 SHOP SPHERE.</p>
      </div>

        <div className="social-links">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <div className="footer-bottom">
        <p className="dark:text-zinc-200" >Terms of Use</p>
        <p className="dark:text-zinc-200" >Privacy Policy</p>
      </div>
      </div>

      
    </footer>
  );
};

export default Footer;
