import { IMovieInfo } from "./../interface/index";
import { MovieModel } from "../database/models";

export function GetMovies<T>() {
  return new Promise<T>(function (resolve, reject) {
    try {
      MovieModel.findAll()
        .then((results) => resolve(results as T))
        .then((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
}

export function AddMovie(info: IMovieInfo) {
  return new Promise(async function (resolve, reject) {
    try {
      const Info = await MovieModel.create(
        { ...info },
        { fields: ["name", "release_year", "director"] }
      );
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetMovieById<T>(id: string) {
  return new Promise<T>(async function (resolve, reject) {
    try {
      const results = await MovieModel.findOne({ where: { id } });
      resolve(results as T);
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateMovieInfo(info: IMovieInfo) {
  return new Promise(async function (resolve, reject) {
    try {
      const results = await MovieModel.update(
        { ...info },
        { where: { id: info.id } }
      );
      resolve(results);
    } catch (error) {
      reject(error);
    }
  });
}

export function DeleteMovie(id: string) {
  return new Promise(async function (resolve, reject) {
    try {
      await MovieModel.destroy({ where: { id } });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetMovieByName<T>(name: string) {
  return new Promise<T>(async (resolve, reject) => {
    try {
      const data = await MovieModel.findOne({ where: { name } });
      resolve(data as T);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetMovieByReleaseYear<T>(year: any) {
  return new Promise<T>(async (resolve, reject) => {
    try {
      const data = await MovieModel.findAll({ where: { release_year: year } });
      resolve(data as T);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetMovieByDirector<T>(id: any) {
  return new Promise<T>(async (resolve, reject) => {
    try {
      const data = await MovieModel.findAll({ where: { director: id } });
      resolve(data as T);
    } catch (error) {
      reject(error);
    }
  });
}
