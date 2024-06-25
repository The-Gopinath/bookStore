import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { FaCircleInfo, FaPenToSquare, FaTrashCan, FaRegSquarePlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Home = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/books').then((res)=>{
        setBooks(res.data)
        }).catch((err)=>{
        console.log(err)
        })
    },[])
    return(
        <div className='home'>
            <div>
                <h1>BookStore</h1>
                <Link to="/books/create"><FaRegSquarePlus className='createbook'/></Link>
            </div>
            <table>
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publish Year</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                    {books.map((book,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                        <td>
                            <div className='icons'>
                                <Link to={`/books/details/${book._id}`} style={{color: 'grey'}}><FaCircleInfo/></Link>
                                <Link to={`/books/edit/${book._id}`} style={{color: 'green'}}><FaPenToSquare/></Link>
                                <Link to={`/books/delete/${book._id}`} style={{color: 'red'}}><FaTrashCan/></Link>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home