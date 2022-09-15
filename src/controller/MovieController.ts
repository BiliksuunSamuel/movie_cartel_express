import { IMovieInfo } from "./../interface/index";
import { Request, Response } from "express";
import {
  AddMovie,
  GetMovieById,
  GetMovieByName,
  GetMovieByReleaseYear,
  GetMovies,
} from "../services/MovieServices";
import { GetDirectorById } from "../services/DirectorServices";
import { ValidateMovieInfo } from "../utilities";

export async function GetMoviesController(req: Request, res: Response) {
  try {
    const data = await GetMovies<IMovieInfo[]>();
    res.send(data);
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function GetMovieByIdController(req: Request, res: Response) {
  try {
    const { id } = req.query;
    const Info = await GetMovieById<IMovieInfo | null>(id as string);
    if (Info) {
      const director = await GetDirectorById(parseInt(Info.director));
      res.send({ director: director, info: Info });
    } else {
      res.status(401).send("No Record Found");
    }
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function AddMovieController(req: Request, res: Response) {
  try {
    const info: IMovieInfo = req.body;
    ValidateMovieInfo(info);
    const existingInfo = await GetMovieByName<IMovieInfo | null>(info.name);
    if (existingInfo) {
      res.status(401).send("Movie Name Already Exist");
    } else {
      await AddMovie(info);
      res.json({ message: "Movie Added Successfully" });
    }
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function GetMovieByReleaseYearController(
  req: Request,
  res: Response
) {
  try {
    const { year } = req.query;
    const data = await GetMovieByReleaseYear<IMovieInfo[]>(year);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
}
