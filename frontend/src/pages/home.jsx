import React from 'react'
import { useState, useEffect } from 'react'
import '../styleSheets/home.css'
import posts from '../assets/posts.json'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MessageIcon from '@mui/icons-material/Message'
import pics from '../assets/profile-pics.json'
import logo from '../assets/ds-logo.png'

function Postify(post) {

	const videoId = getYouTubeId(post.video);

  // Function to extract YouTube video ID from URL
  function getYouTubeId(url) {
    // Regular expression to match YouTube video ID
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1];
  }

  // If videoId is available, create the YouTube embed URL
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?loop=1&modestbranding=1` : null;

	return (
		<div className="post-grid">
			<div className="post-owner">
				<img src={pics[post.profile]} className="profile-pic"></img>
				<div className='username'>
					{post.user}
				</div>
			</div>
			
			<div className="post-video">
				{embedUrl && (
          <iframe
            width="300"
						height="280"
            src={embedUrl}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        )}
			</div>

			<div className="post-caption">
				{post.caption}
			</div>

			<div className="social-buttons">
				<div className="social-button-info"><div className='icon'><FavoriteIcon /></div>{post.likes}</div>
				<div className="social-button-info"><div className='icon'><MessageIcon /></div>{post.comments}</div>
				<div className="social-button-info"><div className='icon'><ShareIcon /></div>{post.shares}</div>
			</div>
		</div>
	)
}

function Home() {
	useEffect(() => {
		document.title = "Home"
	
	}, [])

  return (
	<div className="container">
		<div className="header">
			<div>
				<img src={logo} className="logo-home" />
			</div>

			<div className="dare-info">
				Your DARE: Pay for someone's meal
			</div>
			<div className="upload-dare-button">
				<Link to="/submit" className="upload-btn"><p1>UPLOAD YOUR DARE</p1></Link>
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
			{posts.map(post => (
				Postify(post)
			))}
		</div>
	</div>
  )
}

export default Home