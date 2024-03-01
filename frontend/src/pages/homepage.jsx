import React from 'react';
import '../styleSheets/homepage.css'; 
import { Link } from 'react-router-dom'; // Make sure the import is correct

function HomePage() {
  return (
    <div className="HomePage">
      <img src='https://cdn.discordapp.com/attachments/1207441349754884116/1213132242810052639/image.png?ex=65f45c71&is=65e1e771&hm=5f9ecb2b8953ef6622466df709a530a1ac65afe8aac34ec9e009f0e73c0e8221&' alt="DareShare Logo" className="logo" />
      <div className="button-group">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Sign Up</Link> 
      </div>
    </div>
  );
}

export default HomePage;
