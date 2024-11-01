

import { RiLogoutBoxLine } from "react-icons/ri";


const LogoutButton = () => {
    

    return (
        <div className='flex items-center text-gray-700 hover:text-orange-500 cursor-pointer'>
            <a href="/api/auth/logout">Logout</a>
            <RiLogoutBoxLine />
        </div>
    );
};

export default LogoutButton;