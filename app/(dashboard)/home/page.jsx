'use client'

import "./HomePage.css";
import { useUser } from '@auth0/nextjs-auth0/client';
const HomePage = () => {

  const { user } = useUser();
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome {user.name} to the Home Page!</h1>
      <p className="home-description">
        This is where you can find the latest updates and features. Enjoy
        browsing!
      </p>
    </div>
  );
};

export default HomePage;
