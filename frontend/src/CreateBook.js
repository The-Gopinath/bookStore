import React, { useState } from 'react'
import Backbtn from './Backbtn'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [titlee,setTitlee]=useState("")
  const [authorr,setAuthorr]=useState("")
  const [yearr,setYearr]=useState("")
  const navigate=useNavigate()
  const data={
    title:titlee,
    author:authorr,
    year:yearr
  }
  return (
    <div className='CreateBook'>
      <Backbtn/>
      <h1>Create new Book</h1>
        <form onSubmit={(e)=>{e.preventDefault()
          axios.post("http://localhost:5000/books",data).then(()=>{
            navigate("/")
          }).catch((err)=>{
            console.log(err)
          })
        }}>
          <input type='text' placeholder='Enter the Title' onChange={(e)=>{
            const data=e.target.value
            setTitlee(data)
          }}/>
          <input type='text' placeholder='Enter the Author name' onChange={(e)=>{
            const data=e.target.value
            setAuthorr(data)
          }}/>
          <input type='number' placeholder='Enter the year' onChange={(e)=>{
            const data=e.target.value
            setYearr(data)
          }}/>
          <input type='submit' className='sub'/>
        </form>
      </div>
  )
}

export default CreateBook