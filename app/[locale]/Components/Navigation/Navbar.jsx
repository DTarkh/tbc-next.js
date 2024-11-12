"use client";

import { Link } from "@/i18n/routing";
import "./Navbar.css";
import {useTranslations} from 'next-intl';
import Menu from "../../Components/Menu";
import DarkMode from "../../Components/DarkMode";
import LanguageSwitcher from "../../Components/LanguageSwitcher";


const Navbar = () => {


  const t = useTranslations('Navigation');
  return (
    <nav className="nav-container dark:bg-neutral-800 bg-slate-200">
      <div className="w-[220px]">
        <Link href="/home">
          <h2 className="text-xl font-bold dark:text-white">
            SHOP <span className="text-orange-500">SPHERE</span>
          </h2>
        </Link>
      </div>
      <ul>
        <li><Link className="nav-link dark:text-white" href="/home">{t('home')}</Link></li>
        <li><Link className="nav-link dark:text-white" href="/about">{t('about')}</Link></li>
        <li><Link className="nav-link dark:text-white" href="/blog">{t('blog')}</Link></li>
        <li><Link className="nav-link dark:text-white" href="/products">{t('products')}</Link></li>
      </ul>
      <div className="flex items-center gap-5 w-[220px] justify-end">
        
        <DarkMode />
        <LanguageSwitcher />
        <Menu />

      </div>
    </nav>
  );
};

export default Navbar;
