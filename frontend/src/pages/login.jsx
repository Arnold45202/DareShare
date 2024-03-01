import React from 'react';
import '../styleSheets/login.css'; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="button" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;