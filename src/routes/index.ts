export enum PostRoutes {
  add_director = "/api/director/add",
  add_movie = "/api/movie/add",
}

export enum GetRoutes {
  get_movies = "/api/movies/get",
  get_movie_by_year = "/api/movie/release_year/:year",
  get_directors = "/api/directors/get",
  get_director = "/api/director/get/:id",
  get_movie = "/api/movie/get/:id",
}

export enum PutRoutes {
  update_director = "/api/director/update",
  update_movie = "/api/movie/update",
}
