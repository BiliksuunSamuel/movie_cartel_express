import express from "express";

const Router = express.Router();

export { default as DirectorRouter } from "./DirectorRouter";
export { default as MovieRouter } from "./MovieRouter";

export default Router;
