import "./Footer.css";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("Navigation");
  return (
    <footer className="footer bg-[#E5E5E5] dark:bg-[#14213D] w-full">
      <div className="footer-content">
        <div className="footer-bottom">
          <p className="dark:text-[#FFFFFF] text-[#14213D]">
            &copy; 2024 SHOP SPHERE.
          </p>
        </div>

        <div className="social-links">
          <FaFacebookF className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer" />
          <FaInstagram className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer" />
          <FaLinkedinIn className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer" />
        </div>
        <div className="footer-bottom flex gap-2 hover:cursor-pointer">
          <p className="dark:text-[#FFFFFF] text-[#14213D]">Terms of Use</p>
          <p className="dark:text-[#FFFFFF] text-[#14213D] ">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
