import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditMovie = () => {
    const params = useParams();
  console.log(params);
  const { movieid } = params;
  const[title,setTitle]=useState("")
  const[genre,setGenre]=useState("")
  const[director,setDirector]=useState("")
  const[releaseYear,setReleaseYear]=useState("")
  const[description,setDescription]=useState("")
  const userId = JSON.parse(sessionStorage.getItem("userdata"))._id;
  const navigate = useNavigate();

  const handeleEdit = async (e) => {
    e.preventDefault();

    const movie = {
      title,
      genre,
      director,
      releaseYear,
      description,
    };
    try {
      const res = await axios.patch(
        `http://localhost:8081/api/movie/updateAMovie/${userId}/${movieid}`,
        movie,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      console.log(res);
      navigate("/getallmovies");
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  }
//   handeleEdit();
  return (
    <div>
    <form onSubmit={handeleEdit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <input  
          type="text"
          placeholder="Director"
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          type="text"
          placeholder="Release Year"
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Movie</button>
    </form>
    </div>
  )
}

export default EditMovie