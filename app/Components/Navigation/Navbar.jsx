"use client";

import Link from "next/link";
import "./Navbar.css";
import useProfile from "../../Components/hooks/useProfile";
import { useState } from "react";
import Menu from "../../Components/Menu";
import DarkMode from "../../Components/DarkMode"
import LanguageSwitcher from "../../Components/LanguageSwitcher"

const Navbar = () => {
  const { userData } = useProfile();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);

    if (active) {
      setActive(false);
    }
  };
  return (
    
    <div className="nav-container dark:bg-neutral-800" >
      <div><h2 className="text-xl font-bold dark:text-white">
  SHOP <span className="text-orange-500">SPHERE</span>
</h2></div>
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
      <div className="flex items-center gap-10">
      {userData && (
        <div className="w-12 h-12 rounded-full border-4 border-transparent transition-all hover:border-amber-500">
          <img
            onClick={handleClick}
            src={userData.image}
            alt={`${userData.firstName} ${userData.lastName}`}
            className="w-full h-full rounded-full hover:cursor-pointer"
          />
        </div>
      )}

      <DarkMode />
      <LanguageSwitcher />

      </div>
      {active && <Menu />}
    </div>
  );
};

export default Navbar;
