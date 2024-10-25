"use client";

import Link from "next/link";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      if (theme) {
        return theme;
      } else {
        localStorage.getItem("theme", "light");
        return "light";
      }
    } catch (error) {
      console.log("error", error);
      return "light";
    }
  });

  // read from localstorageconst : theme = localStorage.getItem("theme");

  // if we want to save to localstorage in has to be jsonstirigified.

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
    // if we want to save to localstorage in jsonstirigified.
    // localStorage.setItem("theme", JSON.stringify(theme));
  };

  return (
    <div
      className="nav-container"
      style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
    >
      <ul>
        <Link
          className="nav-link"
          href="/"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          <li className="i">Home</li>
        </Link>
        <Link
          className="nav-link"
          href="/about"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          <li>About</li>
        </Link>
        <Link
          className="nav-link"
          href="/blog"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {" "}
          <li>Blog</li>
        </Link>
        <Link
          className="nav-link"
          href="/products"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {" "}
          <li>Products</li>
        </Link>

        <button className="nav-btn" onClick={handleToggle}>
          Toggle to {theme === "dark" ? "light" : "dark"}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
