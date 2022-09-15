import request from "supertest";
import app from "../app";
import { GetRoutes, PostRoutes } from "../routes";

//
describe(`GET ${GetRoutes.get_movies}`, () => {
  describe("get saved movies", () => {
    test("should respond back with status codes of 200, and content type should be json", async () => {
      const response = await request(app).get(GetRoutes.get_movies);
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("application/json")
      );
    });
  });
});

describe(`GET ${GetRoutes.get_directors}`, () => {
  describe("get saved directors", () => {
    test("should respond back with status codes of 200, and content type should be json", async () => {
      const response = await request(app).get(GetRoutes.get_movies);
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("application/json")
      );
    });
  });
});

//
describe(`POST ${PostRoutes.add_director}`, () => {
  describe("Add New Director", () => {
    test("Should Return A Message of status Diretor Added", async () => {
      const response = await request(app).post(PostRoutes.add_director).send({
        first_name: "ama",
        last_name: "kofi",
      });
      console.log(response.headers);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("text/html")
      );
    });
  });
  //if validation failed;
  describe("when validation failed of the director info", () => {
    test("should respond with a statuscodes of 404", async () => {
      const response = await request(app).post(PostRoutes.add_director).send({
        first_name: "sam",
      });
      expect(response.statusCode).toBe(404);
    });
  });
});

//
describe(`POST ${PostRoutes.add_movie}`, () => {
  describe("Add New Movie", () => {
    test("Should Return A Message of status Report Added", async () => {
      const response = await request(app).post(PostRoutes.add_movie).send({
        name: "Sand Man",
        director: 1,
        release_year: "2022",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("text/html")
      );
    });
  });
  //if validation failed;
  describe("when validation failed of the movie info", () => {
    test("should respond with a statuscodes of 404", async () => {
      const response = await request(app).post(PostRoutes.add_movie).send({
        name: "sand man",
      });
      expect(response.statusCode).toBe(404);
    });
  });
});
