import React from 'react'

function Avatar({url}) {
  return (
   <img 
        loading="lazy" 
        src={url} 
        alt="Profile Picture" 
        className="rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110"/>
  )
}

export default Avatar