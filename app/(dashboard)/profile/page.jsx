'use client'
import useProfile from "../../Components/hooks/useProfile"
import "./UserPage.css";

const UserPage = () => {
  const { userData, error } = useProfile()
 

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