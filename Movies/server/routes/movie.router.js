const express = require("express");
const {
  createMovie,
  ViewAllMovies,
  getSinglemovie,
  UpdateAMovie,
  DeleteAMovie,
  GetAllMoviesbyadmin,
  DeleteAMoviebyadmin,
  DeleteSingleAMoviebyadmin,
} = require("../Controllers/movie.controllers");
const isAuth = require("../middelwere/auth");
const CheckAdmin = require("../middelwere/CheckAdmin");

const app = express();

const movieRouter = express.Router();

movieRouter.post("/createMovie", isAuth, createMovie);
movieRouter.get("/viewAllMovies/:userId", isAuth, ViewAllMovies);

movieRouter.get("/getSinglemovie/:userId/:movieId", isAuth, getSinglemovie);
movieRouter.patch("/updateAMovie/:userId/:movieId", isAuth, UpdateAMovie);
movieRouter.delete("/deleteAMovie/:userId/:movieId", isAuth, DeleteAMovie);
//Adnim route
movieRouter.get(
  "/getAllMoviesbyadmin",
  isAuth,
  CheckAdmin,
  GetAllMoviesbyadmin
);
movieRouter.delete(
  "/DeleteAMoviebyadmin",
  isAuth,
  CheckAdmin,
  DeleteAMoviebyadmin
);
movieRouter.delete(
  "/DeleteSingleAMoviebyadmin/:movieId",
  isAuth,
  CheckAdmin,
  DeleteSingleAMoviebyadmin
);

module.exports = movieRouter;
