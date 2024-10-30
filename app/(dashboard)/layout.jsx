
'use client'

import Navbar from "../Components/Navigation/Navbar"
import Footer from "../Components/Footer/Footer"
import { useAuthCheck } from "../Components/hooks/useAuthCheck"


const Layout = ({children}) => {


 useAuthCheck()


  
  return (
    <>
        <Navbar />
        {children}
        <Footer />
        </>
  )
}

export default Layout;