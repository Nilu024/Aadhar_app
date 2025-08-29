import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/login'); // or '/register'
  };

  return (
    <div className="profile-container">
      {user ? (
        <>
          <h2>👤 Profile</h2>
          <div className="profile-card">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
            {/* Add more fields as needed */}
          </div>
        </>
      ) : (
        <div className="login-prompt">
          <h2>🔒 You’re not logged in</h2>
          <p>Please login or register to view your profile.</p>
          <button className="login-button" onClick={handleRedirect}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
