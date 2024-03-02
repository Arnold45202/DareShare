import React from 'react'
import { useState, useEffect } from 'react'
import '../styleSheets/home.css'
import posts from '../assets/posts.json'
import { Link } from 'react-router-dom';

function Home() {
	useEffect(() => {
		document.title = "Home"
	
	}, [])

  return (
	<div className="container">
		<div className="header">
			<div>
				<img src='https://cdn.discordapp.com/attachments/1207441349754884116/1213132242810052639/image.png?ex=65f45c71&is=65e1e771&hm=5f9ecb2b8953ef6622466df709a530a1ac65afe8aac34ec9e009f0e73c0e8221&' className="logo-home" />
			</div>

			<div className="dare-info">
				Dare #32: Pay for someone's meal
			</div>
			<div className="upload-dare-button">
				<Link to="/upload" className="upload-btn">Upload your DARE</Link>
				
			</div>
		</div>

		<div className="transition-20-block">
			<div className="transition-20"></div>
			<div className="transition-19"></div>
			<div className="transition-18"></div>
			<div className="transition-17"></div>
			<div className="transition-16"></div>
			<div className="transition-15"></div>
			<div className="transition-14"></div>
			<div className="transition-13"></div>
			<div className="transition-12"></div>
			<div className="transition-11"></div>
			<div className="transition-10"></div>
			<div className="transition-9"></div>
			<div className="transition-8"></div>
			<div className="transition-7"></div>
			<div className="transition-6"></div>
			<div className="transition-5"></div>
			<div className="transition-4"></div>
			<div className="transition-3"></div>
			<div className="transition-2"></div>
			<div className="transition-1"></div>
		</div>

		<div className="posts-container"> 
			{posts}
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
			POSTS<br></br>
		</div>
	</div>
  )
}

export default Home