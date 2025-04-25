import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = JSON.parse(sessionStorage.getItem("userdata"));
  const role = userData?.role 
  const userId = userData?._id;


  return (
    <div
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
      }}
    >
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/CreateMovie" style={linkStyle}>
        CreateMovie
      </Link>
      <Link to="/GetAllMovies" style={linkStyle}>
        GetAllMovies
      </Link>
      <Link to="/Signup" style={linkStyle}>
        Signup
      </Link>
      <Link to="/Login" style={linkStyle}>
        Login
      </Link>
      {role==="admin" &&  <Link to="/GetAllByAdminMovies" style={linkStyle} >GetAllByAdminMovies</Link>}
    </div>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};

export default Navbar;
