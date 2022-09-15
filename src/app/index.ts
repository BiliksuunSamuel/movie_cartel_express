import express from "express";
import cors from "cors";
import Router, { DirectorRouter, MovieRouter } from "../router";
import "../database";
//
const App = express();

//
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
//

//
App.use(Router);
App.use(MovieRouter);
App.use(DirectorRouter);
//

export default App;
