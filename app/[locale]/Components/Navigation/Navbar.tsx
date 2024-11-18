"use client";

import { Link } from "@/i18n/routing";
import "./Navbar.css";
import { useTranslations } from "next-intl";
import Menu from "../Menu";
import DarkMode from "../DarkMode";
import LanguageSwitcher from "../LanguageSwitcher";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const t = useTranslations("Navigation");
  return (
    <nav className="nav-container dark:bg-[#14213D] bg-[#E5E5E5] ">
      <div className="w-[220px]">
        <Link href="/home">
          <h2 className="text-xl font-bold dark:text-[#FFFFFF] text-[#14213D]">
            SHOP{" "}
            <span className="text-[#FCA311] dark:text-[#ff9900]">SPHERE</span>
          </h2>
        </Link>
      </div>
      <ul>
        <li>
          <Link
            className={classnames({
              "nav-link": true,
              "text-[#FCA311]": currentPath === "/en/home",
              "text-[#14213D]": currentPath !== "/en/home",
              "dark:text-[#FFFFFF]": currentPath !== "/en/home",
              "dark:text-[#ff9900]": currentPath === "/en/home",
            })}
            href="/home"
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            className={classnames({
              "nav-link": true,
              "text-[#FCA311]": currentPath === "/en/about",
              "text-[#14213D]": currentPath !== "/en/about",
              "dark:text-[#FFFFFF]": currentPath !== "/en/about",
              "dark:text-[#ff9900]": currentPath === "/en/about",
            })}
            href="/about"
          >
            {t("about")}
          </Link>
        </li>
        <li>
          <Link
            className={classnames({
              "nav-link": true,
              "text-[#FCA311]": currentPath === "/en/blog",
              "text-[#14213D]": currentPath !== "/en/blog",
              "dark:text-[#FFFFFF]": currentPath !== "/en/blog",
              "dark:text-[#ff9900]": currentPath === "/en/blog",
            })}
            href="/blog"
          >
            {t("blog")}
          </Link>
        </li>
        <li>
          <Link
            className={classnames({
              "nav-link": true,
              "text-[#FCA311]": currentPath === "/en/products",
              "text-[#14213D]": currentPath !== "/en/products",
              "dark:text-[#FFFFFF]": currentPath !== "/en/products",
              "dark:text-[#ff9900]": currentPath === "/en/products",
            })}
            href="/products"
          >
            {t("products")}
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-5 w-[220px] justify-end">
        <Menu />
        <LanguageSwitcher />
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
