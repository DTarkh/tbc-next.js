
import Navbar from "../Components/Navigation/Navbar"
import Footer from "../Components/Footer/Footer"


const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
        </div>
  )
}

export default Layout