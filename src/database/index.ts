import { Sequelize } from "sequelize";

const DbContext = new Sequelize({
  database: "MovieCartel",
  username: "postgres",
  port: 5432,
  dialect: "postgres",
  password: "bhills",
  host: "localhost",
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

DbContext.authenticate()
  .then(async () => {
    const movies_table_query = `CREATE TABLE IF NOT EXISTS Movies(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      release_year INT NOT NULL,
      director INT NOT NULL
     )`;

    const directors_table_query = `CREATE TABLE IF NOT EXISTS Directors(
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL
     )`;

    await DbContext.query(movies_table_query);

    await DbContext.query(directors_table_query);

    console.log("Database Connected");
  })
  .catch((error) => {
    throw error;
  });

export default DbContext;
