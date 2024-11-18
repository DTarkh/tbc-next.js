import { Link } from "../../../i18n/routing";
import { useRouter } from "@/i18n/routing";
import useProfile from "./hooks/useProfile";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useProfile();
  const router = useRouter();
  const t = useTranslations("Profile");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsOpen(false); // Close the dropdown on logout
    router.push("/login");
  };

  return (
    <>
      {userData && (
        <div className="relative flex items-center">
          <div className="w-12 h-12 rounded-full border-4 border-transparent transition-all hover:border-[#14213D] hover:dark:border-orange-600">
            <Image
              width={100}
              height={100}
              onClick={toggleDropdown}
              src={userData.image}
              alt={`${userData.firstName} ${userData.lastName}`}
              className="w-full h-full rounded-full cursor-pointer"
            />
          </div>

          {isOpen && (
            <div className="absolute right-0 top-[50px] mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <ul className="py-1 flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/profile" onClick={() => setIsOpen(false)}>
                    {t("profile")}
                  </Link>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  {t("logout")}
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
