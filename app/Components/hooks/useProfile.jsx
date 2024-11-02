'use client'
import { useState, useEffect } from "react";

const useProfile = () => {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }, 
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch user data");
        return res.json();
      })
      .then(data => setUserData(data))
      .catch(err => setError(err.message));
  }, []);

  return { userData, error }
}

export default useProfile;