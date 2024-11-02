import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function DropdownMenu() {
  
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear(); 
   
    router.push('/login'); 
};
  
  return (
        <div className="absolute right-[100px] top-[50px]   mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-2">
          <ul className="py-1 flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link href='/profile'>Profile</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
          </ul>
        </div>
    
    
  );
}