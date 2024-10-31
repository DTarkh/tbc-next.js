
'use client'

import { useRouter } from 'next/navigation';
import { RiLogoutBoxLine } from "react-icons/ri";


const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.clear(); 
       
        router.push('/login'); 
    };

    return (
        <div onClick={handleLogout} className='flex items-center text-gray-700 hover:text-orange-500 cursor-pointer'>
            <p>Logout:</p>
            <RiLogoutBoxLine />
        </div>
    );
};

export default LogoutButton;