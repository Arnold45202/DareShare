import React, { useState, useEffect } from 'react';
import '../styleSheets/register.css'; 
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register";
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/login');
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Register</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            id="email" 
            placeholder="Email*" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <input 
            type="text" 
            id="userName" 
            placeholder="Username*" 
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            id="password" 
            placeholder="Password*" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            id="confirmPassword" 
            placeholder="Confirm Password*" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">Register</button>
        <Link to="/login" className="account-btn">Already have an account? Login here!</Link>
      </form>
    </div>
  );
}

export default Register;