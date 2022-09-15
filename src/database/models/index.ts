import { DataTypes } from "sequelize";
import DbContext from "..";

export const MovieModel = DbContext.define(
  "movie",
  {
    name: DataTypes.STRING,
    release_year: DataTypes.NUMBER,
    director: DataTypes.STRING,
  },
  { timestamps: false }
);

export const DirectorModel = DbContext.define(
  "director",
  {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  },
  { timestamps: false }
);
