import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaCircleInfo } from 'react-icons/fa6'
import Backbtn from './Backbtn'


const Showbook = () => {
  const [idd,setIdd]=useState("")
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [year,setYear]=useState("")
  const [created,setCreated]=useState("")
  const [updated,setUpdated]=useState("")
  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/books/${id}`).then((res)=>{
      setIdd(res.data._id)
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setYear(res.data.year)
      setCreated(res.data.createdAt)
      setUpdated(res.data.updatedAt)
    })
  })
  return (
    <div>
      <Backbtn/>
      <div className='showbook'>
        <h1>Book Info</h1>
        <FaCircleInfo className='ibtn'/>
        <div className='mc'>Book ID:  <div className='ids'>{idd}</div></div>
        <div className='mc'>Book Name:  <div className='nas'>{title}</div></div>
        <div className='mc'>Author:  <div className='aus'>{author}</div></div>
        <div className='mc'>Published Year:  <div className='yes'>{year}</div></div>
        <div className='mc'>Usage From:  <div className='uss'>{created}</div></div>
        <div className='mc'>Updated At:  <div className='ups'>{updated}</div></div>
      </div>
    </div>

  )
}

export default Showbook