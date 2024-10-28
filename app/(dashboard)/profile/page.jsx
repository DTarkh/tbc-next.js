'use client'
import { useEffect, useState } from "react";
import "./UserPage.css";

const UserPage = () => {
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

  return (
    <div className="user-page">
      {error && <p className="error-message">{error}</p>}
      {userData ? (
        <div className="user-card">
          <img src={userData.image} alt={`${userData.firstName} ${userData.lastName}`} className="user-image" />
          <h2>{userData.firstName} {userData.lastName}</h2>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Birth Date:</strong> {userData.birthDate}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default UserPage;