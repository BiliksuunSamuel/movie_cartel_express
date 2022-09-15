import { PostRoutes, GetRoutes } from "./../routes/index";
import express from "express";
import {
  AddMovieController,
  GetMovieByIdController,
  GetMovieByReleaseYearController,
  GetMoviesController,
} from "../controller/MovieController";

const Router = express.Router();

//
Router.post(PostRoutes.add_movie, AddMovieController);

//
Router.get(GetRoutes.get_movies, GetMoviesController);
Router.get(GetRoutes.get_movie, GetMovieByIdController);
Router.get(GetRoutes.get_movie_by_year, GetMovieByReleaseYearController);

export default Router;
