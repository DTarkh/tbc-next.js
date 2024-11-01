'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import "./UserPage.css";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className='user-page'>
        <div className='user-card'>
          <img src={user.picture} alt={user.name} className="profile-pic" />
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <div className="additional-info">
            <p><strong>Given Name:</strong> {user.given_name}</p>
            <p><strong>Family Name:</strong> {user.family_name}</p>
            <p><strong>Nickname:</strong> {user.nickname}</p>
          </div>
        </div>
      </div>
    )
  );
}