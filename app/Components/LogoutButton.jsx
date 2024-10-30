
'use client'

import { useRouter } from 'next/navigation';


const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.clear(); 
       
        router.push('/login'); 
    };

    return (
        <div onClick={handleLogout}>
            <button>Logout</button>
        </div>
    );
};

export default LogoutButton;