"use client";
import { useState, useEffect } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
}

interface UseProfileReturn {
  userData: UserData | null;
  error: string | null;
}

const useProfile = (): UseProfileReturn => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user data");
        return res.json();
      })
      .then((data: UserData) => setUserData(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  return { userData, error };
};

export default useProfile;
