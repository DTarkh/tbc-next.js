import { useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("ENG");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setLanguage("ქარ");
    setIsOpen(false);

    if (language === "ქარ" ? setLanguage("ENG") : language) setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-3 py-1 font-semibold rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
      >
        {language}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <button
            onClick={handleClick}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            {language === "ENG" ? "ქარ" : "ENG"}
          </button>
        </div>
      )}
    </div>
  );
}
