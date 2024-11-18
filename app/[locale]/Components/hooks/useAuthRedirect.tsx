"use client";

import { useEffect, useState } from "react";
import { useRouter } from "../../../../i18n/routing";

export function useAuthRedirect() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = localStorage?.getItem("isAuthenticated");
    const isAuthenticated = checkAuth && JSON.parse(checkAuth);
    if (isAuthenticated) {
      router.push("/home");
    } else {
      setLoading(false);
    }
  }, [router]);
}
