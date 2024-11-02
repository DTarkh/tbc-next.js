
'use client'

import Navbar from "../Components/Navigation/Navbar"
import Footer from "../Components/Footer/Footer"
import { useAuthCheck } from "../Components/hooks/useAuthCheck"
import LoadingSpinner from "../Components/Spinner"
import { useState } from "react";


const Layout = ({children}) => {
 const loading = useAuthCheck()
 const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }


if(loading) {
  return <LoadingSpinner/>
}
  
  return (
    <div className={darkMode && 'dark'}>
        <button className="w-10 h-10 z-10  rounded-full absolute right-[150px] top-[11px] bg-slate-500 dark:bg-slate-200 text-slate-100 dark:text-slate-700" onClick={toggleDarkMode}>{darkMode ? "LHT" : "DRK"}</button>
        <Navbar />
        <main className="bg-gray-100 min-h-screen p-4 flex flex-col justify-center items-center dark:bg-slate-600">
        {children}
      </main>
        <Footer />
        </div>
  )
}

export default Layout;