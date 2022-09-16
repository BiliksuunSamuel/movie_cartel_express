import { NextFunction, Request, Response } from "express";
import { IDirectorInfo } from "../interface";
import { GetDirectorByFirstAndLastName } from "../services/DirectorServices";

export async function RegisterDirectorMiddleWare(
  req: Request,
  res: Response,
  nex: NextFunction
) {
  try {
    const info: IDirectorInfo = req.body;
    const Info = await GetDirectorByFirstAndLastName(info);
    if (Info) {
      res.status(404).send("Fist Name and Last Name Already Taken");
      return;
    }
    {
      nex();
    }
  } catch (error) {
    res.status(404).send(error);
  }
}
