import React from 'react'
import { Link } from 'react-router'

function StartPage() {
  return (
    <Link to={"/letter"} >
    <img src='/LetterMama.png' alt='No image' className='letterImage'/>
    </Link>
  )
}

export default StartPage
