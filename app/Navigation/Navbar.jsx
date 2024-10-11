
import Link from 'next/link';
import './Navbar.css'

const Navbar = () => {



  return (
    <div className='nav-container'>
       <ul>
        <Link className='nav-link' href='/'> <li className='i'>Home</li></Link>
        <Link className='nav-link' href='/about'> <li >About</li></Link>
        <Link className='nav-link' href='/blog'> <li >Blog</li></Link>
        <Link className='nav-link' href='/products'> <li >Products</li></Link>
        
       </ul>



    </div>
  )
}

export default Navbar