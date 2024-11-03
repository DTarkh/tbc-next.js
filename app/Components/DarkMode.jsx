'use client'

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";


const DarkMode = () => {

const [darkMode, setDarkMode] = useState(false)




useEffect(() => {
    // Read from localStorage or system settings
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);


// useEffect(() => {
//     const theme = localStorage.getItem('theme')
//     if (theme === 'dark') {
//       setDarkMode(true)
//     } 
    

// }, [] )

useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }

    

}, [darkMode] )
 
  return (
    <div className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-amber-600 cursor-pointer rounded-full p-1" onClick={() =>setDarkMode(!darkMode)}>
        <FaMoon className="text-white" size={18}/>
        <div className="absolute bg-white w-6 h-6 rounded-full shadow-md " style={darkMode ? {left:"2px"} : {right: "2px"}}></div>
        <BsSunFill className="text-amber-600 ml-auto" size={18} />
    </div>
  )
}

export default DarkMode