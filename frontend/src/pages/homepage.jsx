import React from 'react';
import '../styleSheets/homepage.css'; 
import { Link } from 'react-router-dom'; // Make sure the import is correct
import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    document.title = "DareShare";
    document.querySelector("link[rel='icon']").href = "https://cdn.discordapp.com/attachments/1207441349754884116/1213149090519588924/favicon-16x16.png?ex=65f46c22&is=65e1f722&hm=7a7bc7c46841ead845fba12be6836c0e179f67d07b3135e7a9f8d0916534dbbb&";
  }, []);

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
