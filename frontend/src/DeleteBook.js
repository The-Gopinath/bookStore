import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Deletebook = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  return (
    <div className='deletebook'>
      <h2>Are You sure want to Delete it ?</h2>
      <div className='dbtn'>
        <button onClick={()=>{
          navigate("/")
        }}>No, Go Back</button>
        <button onClick={()=>{
          axios.delete(`http://localhost:5000/books/${id}`).then(()=>{
            navigate("/")
          })
        }}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default Deletebook