'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (!isAuthenticated) {
      router.push("/login");
    } 
  }, [router]);
}
