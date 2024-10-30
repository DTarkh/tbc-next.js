'use client'

import Link from "next/link";
import "./Navbar.css";
import LogoutButton from "../../Components/LogoutButton"
// import useTheme from "../hooks/useTheme"

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme()

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
        <Link
          className="nav-link"
          href="/profile"
          // style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {" "}
          <li>Profile</li>
        </Link>

        {/* <button className="nav-btn"
        onClick={toggleTheme}
         >
          Toggle to {theme === "dark" ? "light" : "dark"}
        </button> */}
      </ul>
      <LogoutButton />
    </div>
  );
};

export default Navbar;

