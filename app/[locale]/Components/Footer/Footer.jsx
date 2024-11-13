import { Link } from "../../../../i18n/routing";
import "./Footer.css"
import {useTranslations} from 'next-intl';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  const t = useTranslations('Navigation');
  return (
    <footer className="footer bg-amber-100 dark:bg-neutral-800" >
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/home" className="dark:text-zinc-200">{t('home')}</Link>
          <Link href="/about" className="dark:text-zinc-200">{t('about')}</Link>
          <Link href="/blog" className="dark:text-zinc-200">{t('blog')}</Link>
          <Link href="/products" className="dark:text-zinc-200">{t('products')}</Link>
        </div>

        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-icon dark:text-zinc-200" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon dark:text-zinc-200" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="social-icon dark:text-zinc-200" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="dark:text-zinc-200" >&copy; 2024 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
