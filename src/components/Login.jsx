import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Register from "./Register";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Trigger Google OAuth flow
    console.log("Google login triggered");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email/password login
  };

  const goToRegister = () => {
    navigate("/Register");
  };

  return (
    <div className="auth-container">
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <hr />
      <div className="button-row">
        <button className="google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
        <button className="register-btn" onClick={goToRegister}>
          Register Here
        </button>
      </div>
    </div>
  );
};

export default Login;
