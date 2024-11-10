"use client";

import { useState } from "react";
import { useRouter } from "../../../../i18n/routing";
import "./LoginPage.css";
import { useAuthRedirect } from "../../Components/hooks/useAuthRedirect"
import LoadingSpinner from "../../Components/Spinner";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const loading = useAuthRedirect()

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents form from reloading the page
    setError(null); // Clear any previous error
    console.log("Login")
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password, expiresInMins: 30 }),
      });

      if (!response.ok) throw new Error("Invalid login credentials");

      const data = await response.json();
      console.log("Login successful:", data);
      
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("token", data.accessToken);
      router.push("/home"); // თუ იყენებთ router-ს

      return data;

    } catch (err) {
      setError(err.message)
    }

    
  };

  if (loading) {
    return <LoadingSpinner />
  }


  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-title">LOGIN</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="auth-error">{error}</p>}
        <button type="submit" className="auth-button">
          Login
        </button>
      </form>
      <p className="auth-footer">Don&apos;t have an account? <a href="/auth/register">Register here</a></p>
    </div>
  );
};

export default LoginPage;
