import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Backbtn = () => {
  return (
    <Link to="/" className='Backbtn'><FaArrowLeft/></Link>
  )
}

export default Backbtn