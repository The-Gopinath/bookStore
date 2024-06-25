import React, { useEffect } from 'react'
import { useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Backbtn from './Backbtn'
import { useNavigate } from 'react-router-dom'

const Editbook = () => {
  const [titlee,setTitlee]=useState("")
  const [authorr,setAuthorr]=useState("")
  const [yearr,setYearr]=useState("")
  const {id}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:5000/books/${id}`).then((res)=>{
      setTitlee(res.data.title)
      setAuthorr(res.data.author)
      setYearr(res.data.year)
    })
  },[])
  const data={
    title:titlee,
    author:authorr,
    year:yearr
  }
  return (
    <div className='editbook'>
      <Backbtn/>
      <h1>Edit Book</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/books/${id}`,data).then((e)=>{
          navigate("/")
        })
      }}>
        <input type='text' placeholder='Enter the Title' value={titlee} onChange={(e)=>{
            const data=e.target.value
            setTitlee(data)
        }}/>
        <input type='text' placeholder='Enter the Author name' value={authorr} onChange={(e)=>{
            const data=e.target.value
            setAuthorr(data)
        }}/>
        <input type='number' placeholder='Enter the year' value={yearr} onChange={(e)=>{
            const data=e.target.value
            setYearr(data)
        }}/>
        <input type='submit' className='sub'/>
      </form>
    </div>
  )
}

export default Editbook