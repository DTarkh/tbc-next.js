"use client";

import Link from "next/link";
import "./Navbar.css";
import useProfile from "../../Components/hooks/useProfile";
import { useState } from "react";
import Menu from "../../Components/Menu";

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
      <ul>
        <Link className="nav-link" href="/">
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
      {userData && (
        <div className="w-12 h-12 rounded-full border-4 border-transparent transition-all hover:border-gray-700 absolute right-[200px]">
          <img
            onClick={handleClick}
            src={userData.image}
            alt={`${userData.firstName} ${userData.lastName}`}
            className="w-full h-full rounded-full hover:cursor-pointer"
          />
        </div>
      )}
      {active && <Menu />}
    </div>
  );
};

export default Navbar;
