export interface FilmData {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface IFilmsContext {
  filmsData: FilmData[];
  handleShowRecentMovies: () => Promise<void>;
  handleSearchFilms: (filmeName: string) => void;
  handleGetFilmSelected: (filmClicked: FilmData) => void;
  subTitle: string;
}

export interface IFilmsProvider {
  children: React.ReactNode;
}
