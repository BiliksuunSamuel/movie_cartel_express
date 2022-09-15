import { IDirectorInfo } from "./../interface/index";
import { DirectorModel } from "./../database/models/index";

export function GetDirectors() {
  return new Promise(function (resolve, reject) {
    try {
      DirectorModel.findAll()
        .then((results) => resolve(results))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
}

export function AddDirector<T>(info: IDirectorInfo) {
  return new Promise<T>(async function (resolve, reject) {
    try {
      const Info = await DirectorModel.create(
        { ...info },
        { fields: ["first_name", "last_name"] }
      );
      Info.save();
      resolve(Info as T);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDirectorById<T>(id: any) {
  return new Promise<T>(async function (resolve, reject) {
    try {
      const results = await DirectorModel.findOne({ where: { id } });
      resolve(results as T);
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateDirectorInfo(info: IDirectorInfo) {
  return new Promise(async function (resolve, reject) {
    const results = await DirectorModel.update(
      { ...info },
      { where: { id: info.id } }
    );
    resolve(results);
  });
}

export function DeleteDirectorInfo(id: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await DirectorModel.destroy({ where: { id } });
      resolve(results);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDirectorByFirstAndLastName<T>(info: IDirectorInfo) {
  return new Promise<T>(async (resolve, reject) => {
    try {
      const data = await DirectorModel.findOne({
        where: { first_name: info.first_name, last_name: info.last_name },
      });
      resolve(data as T);
    } catch (error) {
      reject(error);
    }
  });
}
