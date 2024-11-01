
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Home Page!</h1>
      <p className="home-description">This is where you can find the latest updates and features. Enjoy browsing!</p>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default HomePage;