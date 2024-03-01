import React from 'react'
import { useEffect } from 'react'
import '../styleSheets/home.css'

function Home() {
	useEffect(() => {
		document.title = "Home"
	
	}, [])

  return (
    <div>
		<img src='https://cdn.discordapp.com/attachments/1207441349754884116/1213132242810052639/image.png?ex=65f45c71&is=65e1e771&hm=5f9ecb2b8953ef6622466df709a530a1ac65afe8aac34ec9e009f0e73c0e8221&' className="logo-home" />
	</div>
  )
}

export default Home