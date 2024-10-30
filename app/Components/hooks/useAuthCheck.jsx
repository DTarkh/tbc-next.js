'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuthCheck() {
    const [loading, setLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (!isAuthenticated) {
      router.push("/login");
    } else{
      setLoading(false)
    }
  }, [router]);
return loading
}
