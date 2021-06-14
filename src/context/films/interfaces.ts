export interface FilmsData {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface IFilmsContext {
  filmsData: FilmsData[];
  handleShowRecentMovies: () => Promise<void>;
  handleSearchFilms: (filmeName: string) => void;
  handleGetFilmSelected: (filmClicked: FilmsData) => void;
  subTitle: string;
}

export interface IFilmsProvider {
  children: React.ReactNode;
}
