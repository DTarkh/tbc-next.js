'use client'

import Link from "next/link";
import "./Navbar.css";
import LogoutButton from "../../Components/LogoutButton"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from "react";
import Menu from "../../Components/Menu"
// import useTheme from "../hooks/useTheme"

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme()
  const { user } = useUser();
  const [active, setActive] = useState(false)


  const handleClick = () => {
    setActive(true)

    if (active) {
      setActive(false)
    }

  }
  return (
    <div
      className="nav-container"
      // style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
    >
      <ul>
        <Link
          className="nav-link"
          href="/"
          // style={{ color: theme === "dark" ? "white" : "black" }}
        >
          <li>Home</li>
        </Link>
        <Link
          className="nav-link"
          href="/about"
          // style={{ color: theme === "dark" ? "white" : "black" }}
        >
          <li>About</li>
        </Link>
        <Link
          className="nav-link"
          href="/blog"
          // style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {" "}
          <li>Blog</li>
        </Link>
        <Link
          className="nav-link"
          href="/products"
          // style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {" "}
          <li>Products</li>
        </Link>
       

        {/* <button className="nav-btn"
        onClick={toggleTheme}
         >
          Toggle to {theme === "dark" ? "light" : "dark"}
        </button> */}
      </ul>
      {user && <img src={user.picture} alt={user.name} onClick={handleClick}className="w-9  hover:cursor-pointer absolute right-[190px] " />}
      {active && <Menu />}
   
    </div>
  );
};

export default Navbar;

