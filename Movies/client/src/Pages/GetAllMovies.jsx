import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const GetAllMovies = () => {
const[data,setData]=useState([])  
const userdata=JSON.parse(sessionStorage.getItem("userdata"));
const userId=userdata._id



  const  fatchallmovies = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8081/api/movie/ViewAllMovies/${userId}`,
        { withCredentials: true }
      );
      setData(res.data);
      setData(Array.isArray(res.data) ? res.data : res.data.movies || []);
      toast.success(res.data?.message); 
      console.log(res);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fatchallmovies();
  },[userId])

 const handleDelete = async (movieId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8081/api/movie/deleteAMovie/${userId}/${movieId}`,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      fatchallmovies();
    } catch (error) {
      toast.error(error.response?.data?.message||error.message);
    }
  };
  const handleEdit = async(movieId) => {
    try {
        const res = await axios.patch(
          `http://localhost:8081/api/movie/updateAMovie/${userId}/${movieId}`,
          { withCredentials: true }
        );
        toast.success(res.data.message);
        fatchallmovies();
      } catch (error) {
        toast.error(error.response?.data?.message||error.message);
      }
  }


  
  return (
    <div style={{ padding: "20px" }}>
    {data.length > 0 ? (
      data.map((movie, _id) => (
        <div 
          key={movie._id} 
          style={{
            height:"200px",
            width:"300px",
            margin: "auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <h2>{movie.title}</h2>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Description:</strong> {movie.description}</p>
       
          
          <button onClick={() => handleDelete(movie._id)}>Delete</button>
          <Link to={`/EditMovie/${userId}/${movie._id}`}>
              <button variant="primary">Edit</button>
            </Link>

        </div>
      ))
    ) : (
      <p>No movies found.</p>
    )}
  </div>
  )
};

export default GetAllMovies;
