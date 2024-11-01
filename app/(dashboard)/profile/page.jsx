'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import "./UserPage.css"


export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className='user-page'>

      <div className='user-card'>
      <img src={user.picture} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

      </div>
    )
  );
}