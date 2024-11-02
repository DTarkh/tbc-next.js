'use client'

import Link from "next/link";
import "./Navbar.css";
import useProfile from "../../Components/hooks/useProfile"
import { useState } from "react";
import Menu from "../../Components/Menu"

const Navbar = () => {
 
const { userData} = useProfile()
const [active, setActive] = useState(false)


const handleClick = () => {
  setActive(true);

  if (active) {
    setActive(false);
  }
}
  return (
    <div
      className="nav-container"
     
    >
      <ul>
        <Link
          className="nav-link"
          href="/"
          
        >
          <li>Home</li>
        </Link>
        <Link
          className="nav-link"
          href="/about"
         
        >
          <li>About</li>
        </Link>
        <Link
          className="nav-link"
          href="/blog"
          
        >
          {" "}
          <li>Blog</li>
        </Link>
        <Link
          className="nav-link"
          href="/products"
          
        >
          
          <li>Products</li>
        </Link>
       
      </ul>
     {userData && <img  onClick={handleClick} className="w-10 rounded-full absolute right-[200px] hover:cursor-pointer"  src={userData.image}/>}
     {active && <Menu/>}
    </div>
  );
};

export default Navbar;

