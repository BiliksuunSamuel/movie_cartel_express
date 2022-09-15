export interface IDirectorInfo {
  first_name: string;
  id: string;
  last_name: string;
}

export interface IMovieInfo {
  id: string;
  director: string;
  release_year: number;
  name: string;
}
