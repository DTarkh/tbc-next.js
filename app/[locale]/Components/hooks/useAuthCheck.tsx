"use client";

import { useEffect, useState } from "react";
import { useRouter } from "../../../../i18n/routing";

export function useAuthCheck() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = localStorage?.getItem("isAuthenticated");
    const isAuthenticated = checkAuth && JSON.parse(checkAuth);
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);
  return loading;
}
