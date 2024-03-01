import React, { useState } from 'react';
import '../styleSheets/login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/home');
  }

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
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
            type="password" 
            id="password" 
            placeholder="Password*" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <Link to="/register" className="account-btn">Don't have an account? Sign up now!</Link>
      </form>
    </div>
  );
}

export default Login;