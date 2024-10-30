
'use client'

import Navbar from "../Components/Navigation/Navbar"
import Footer from "../Components/Footer/Footer"
import { useAuthCheck } from "../Components/hooks/useAuthCheck"
import LoadingSpinner from "../Components/Spinner"


const Layout = ({children}) => {


 const loading = useAuthCheck()

if(loading) {
  return <LoadingSpinner/>
}
  
  return (
    <>
        <Navbar />
        {children}
        <Footer />
        </>
  )
}

export default Layout;