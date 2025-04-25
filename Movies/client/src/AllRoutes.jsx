import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateMovie from "./Pages/CreateMovie";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import GetAllMovies from "./Pages/GetAllMovies";
import EditMovie from "./Pages/EditMovie";
import GetAllByAdminMovies from "./Pages/AdminMovies";
import Rolevalidator from "./Components/Rollvalidetar";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CreateMovie" element={<CreateMovie />} />
      <Route path="/GetAllMovies" element={<GetAllMovies />} />
      <Route path="/EditMovie/:userId/:movieid" element={<EditMovie />} />
      <Route
        path="GetAllByAdminMovies"
        element={
          <Rolevalidator>
            <GetAllByAdminMovies />
          </Rolevalidator>
        }
      />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
