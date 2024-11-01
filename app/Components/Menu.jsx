import Link from "next/link";


export default function DropdownMenu() {
  
  
  return (
        <div className="absolute right-[100px] top-[50px]   mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-2">
          <ul className="py-1 flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link href='/profile'>Profile</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/api/auth/logout">Logout</a></li>
          </ul>
        </div>
    
    
  );
}