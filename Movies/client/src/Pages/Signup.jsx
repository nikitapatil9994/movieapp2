import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8081/api/user/signup',
        { name, email, password }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url('https://www.example.com/your-movie-background.jpg')`, // Replace with a movie-related background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          padding: '30px',
          borderRadius: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark transparent background
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)', // Dark shadow for depth
          width: '300px',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#fff' }}>Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#4e54c8',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#5e64e8')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4e54c8')}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
  color: '#fff', // White text to stand out against the dark background
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker background for inputs
};

export default Signup;
