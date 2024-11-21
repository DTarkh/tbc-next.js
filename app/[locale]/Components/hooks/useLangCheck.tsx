'use client';

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const useLangCheck = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setIsEnglish(pathname.includes("/en"));
    }
  }, [pathname]);

  return isEnglish;
};

export default useLangCheck;