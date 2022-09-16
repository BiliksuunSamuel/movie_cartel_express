import { PostRoutes, GetRoutes, PutRoutes } from "./../routes/index";
import express from "express";
import {
  GetDirectorByIdController,
  GetDirectorsController,
  RegisterDirectorController,
} from "../controller/DirectorController";
import { RegisterDirectorMiddleWare } from "../middleware/DirectorMiddleware";
const Router = express.Router();

//
Router.post(
  PostRoutes.add_director,
  RegisterDirectorMiddleWare,
  RegisterDirectorController
);

//
Router.get(GetRoutes.get_director, GetDirectorByIdController);
Router.get(GetRoutes.get_directors, GetDirectorsController);

///

export default Router;
