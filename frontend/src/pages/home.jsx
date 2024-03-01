import React from 'react'
import { useEffect } from 'react'

function Home() {
	useEffect(() => {
		document.title = "Home"
	}, [])

  return (
    <div>H</div>
  )
}

export default Home