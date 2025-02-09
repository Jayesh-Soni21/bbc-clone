import React from 'react'
import { useLocation } from 'react-router-dom'
import Comments from './Comments'

function NewsDetails() {
    const location=useLocation()
    
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='p-5'>
        <h1 className='font-extrabold text-2xl'>
            {location.state.data.title}
        </h1>
        <h4>{location.state.data.description}</h4>
        <img src={location.state.data.urlToImage} alt=''/>
        </div>
        <div>
        <Comments url={location.state.data.url}/>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
