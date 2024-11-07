"use client";

import Link from "next/link";
import "./Navbar.css";

import Menu from "../../Components/Menu";
import DarkMode from "../../Components/DarkMode";
import LanguageSwitcher from "../../Components/LanguageSwitcher";


const Navbar = () => {
  
  return (
    <div className="nav-container dark:bg-neutral-800">
      <div className="w-[220px]">
        <Link href="/home">
          <h2 className="text-xl font-bold dark:text-white">
            SHOP <span className="text-orange-500">SPHERE</span>
          </h2>
        </Link>
      </div>
      <ul>
        <Link className="nav-link" href="/home">
          <li className="dark:text-white">Home</li>
        </Link>
        <Link className="nav-link" href="/about">
          <li className="dark:text-white">About</li>
        </Link>
        <Link className="nav-link" href="/blog">
          <li className="dark:text-white">Blog</li>
        </Link>
        <Link className="nav-link" href="/products">
          <li className="dark:text-white">Products</li>
        </Link>
      </ul>
      <div className="flex items-center gap-5 w-[220px] justify-end">
        
        <DarkMode />
        <LanguageSwitcher />
        <Menu />

      </div>
    </div>
  );
};

export default Navbar;
