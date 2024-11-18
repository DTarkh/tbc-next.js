"use client";
import useProfile from "../../Components/hooks/useProfile";
import "./UserPage.css";
import LoadingSpinner from "../../Components/Spinner";
import Image from "next/image";
import { log } from "node:console";

const UserPage = () => {
  const { userData, error } = useProfile();

  return (
    <>
      {error && <p className="error-message">{error}</p>}
      {userData ? (
        <div className="user-card">
          <Image
            src={userData.image}
            alt={`${userData.firstName} ${userData.lastName}`}
            width={100}
            height={100}
            className="user-image"
          />
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <p>
            <strong>Age:</strong> {userData.age}
          </p>
          <p>
            <strong>Gender:</strong> {userData.gender}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          <p>
            <strong>Birth Date:</strong> {userData.birthDate}
          </p>
        </div>
      ) : (
        !error && <LoadingSpinner />
      )}
    </>
  );
};

export default UserPage;
