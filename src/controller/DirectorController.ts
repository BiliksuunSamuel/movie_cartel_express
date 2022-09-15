import { IDirectorInfo, IMovieInfo } from "./../interface/index";
import { Request, Response } from "express";
import {
  AddDirector,
  GetDirectorByFirstAndLastName,
  GetDirectorById,
  GetDirectors,
} from "../services/DirectorServices";
import { GetMovieByDirector } from "../services/MovieServices";
import { ValidateDirectorInfo } from "../utilities";

export async function RegisterDirectorController(req: Request, res: Response) {
  try {
    const info: IDirectorInfo = req.body;
    ValidateDirectorInfo(info);
    const existingName =
      await GetDirectorByFirstAndLastName<IDirectorInfo | null>(info);
    if (existingName) {
      res.status(404).send("First Name and Last Name Already Taken");
    } else {
      await AddDirector<IDirectorInfo>(info);
      res.json("Account Created Successfully");
    }
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function GetDirectorsController(req: Request, res: Response) {
  try {
    const data = await GetDirectors();
    res.send(data);
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function GetDirectorByIdController(req: Request, res: Response) {
  try {
    const { id } = req.query;
    console.log(id);
    const Info = await GetDirectorById<IDirectorInfo | null>(
      parseInt(id ? id?.toString() : "0")
    );
    if (Info) {
      const data = await GetMovieByDirector<IMovieInfo[]>(id);
      res.send({ info: Info, movies: data });
    } else {
      res.status(401).send("No Record Found");
    }
  } catch (error) {
    res.status(404).send(error);
  }
}
