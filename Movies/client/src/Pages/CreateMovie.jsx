import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8081/api/movie/createMovie",
        {
          title,
          genre,
          director,
          releaseYear,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      toast.success("Movie created successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create movie");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url('https://www.example.com/your-movie-background.jpg')`, // Replace with an actual movie-themed background URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "40px",
          backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark background with transparency
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.8)",
          width: "320px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#fff" }}>Create Movie</h2>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          value={genre}
          placeholder="Genre"
          onChange={(e) => setGenre(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          value={director}
          placeholder="Director"
          onChange={(e) => setDirector(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          value={releaseYear}
          placeholder="Release Year"
          onChange={(e) => setReleaseYear(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "6px",
            backgroundColor: "#4e54c8",
            color: "white",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5e64e8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4e54c8")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  color: "#fff", // White text for inputs to match dark theme
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker input background for consistency
};

export default CreateMovie;
