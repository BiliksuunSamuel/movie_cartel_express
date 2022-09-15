import { v4 as uuid } from "uuid";
import { IDirectorInfo, IMovieInfo } from "../interface";

export function GenerateId() {
  return uuid().toString();
}

export function ValidateDirectorInfo(info: IDirectorInfo) {
  if (info.first_name.length <= 0) {
    throw "First Name Required";
  }
  if (info.last_name.length <= 0) {
    throw "Last Name Required";
  }
}

export function ValidateMovieInfo(info: IMovieInfo) {
  if (info.name.length <= 0) {
    throw "Movie Name Required";
  }
  if (info.release_year <= 0) {
    throw "Invalid movie release year";
  }
  if (info.director.length <= 0) {
    throw "Movie Director Required";
  }
}
