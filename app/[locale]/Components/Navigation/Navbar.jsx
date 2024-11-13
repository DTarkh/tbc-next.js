"use client";

import { Link } from "@/i18n/routing";
import "./Navbar.css";
import {useTranslations} from 'next-intl';
import Menu from "../../Components/Menu";
import DarkMode from "../../Components/DarkMode";
import LanguageSwitcher from "../../Components/LanguageSwitcher";
import { usePathname } from "next/navigation";
import classnames from "classnames";


const Navbar = () => {

  const currentPath = usePathname()
  const t = useTranslations('Navigation');
  return (
    <nav className="nav-container dark:bg-black dark:bg-opacity-90 bg-amber-100">
      <div className="w-[220px]">
        <Link href="/home">
          <h2 className="text-xl font-bold dark:text-zinc-100">
            SHOP <span className="text-[#4B0082] dark:text-[#ff9900]">SPHERE</span>
          </h2>
        </Link>
      </div>
      <ul>
        <li><Link className={classnames({
          'nav-link': true,
          'text-[#4B0082]': currentPath === '/en/home',
          'text-slate-500': currentPath !== '/en/home',
          'dark:text-zinc-400' : currentPath !== '/en/home',
          'dark:text-[#ff9900]' : currentPath === '/en/home'
        })} href="/home">{t('home')}</Link></li>
        <li><Link className={classnames({
          'nav-link': true,
          'text-[#4B0082]': currentPath === '/en/about',
          'text-slate-500': currentPath !== '/en/about',
          'dark:text-zinc-400' : currentPath !== '/en/about',
          'dark:text-[#ff9900]' : currentPath === '/en/about'
        })} href="/about">{t('about')}</Link></li>
        <li><Link className={classnames({
          'nav-link': true,
          'text-[#4B0082]': currentPath === '/en/blog',
          'text-slate-500': currentPath !== '/en/blog',
          'dark:text-zinc-400' : currentPath !== '/en/blog',
          'dark:text-[#ff9900]' : currentPath === '/en/blog'
        })} href="/blog">{t('blog')}</Link></li>
        <li><Link className={classnames({
          'nav-link': true,
          'text-[#4B0082]': currentPath === '/en/products',
          'text-slate-500': currentPath !== '/en/products',
          'dark:text-zinc-400' : currentPath !== '/en/products',
          'dark:text-[#ff9900]' : currentPath === '/en/products'
        })} href="/products">{t('products')}</Link></li>
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
