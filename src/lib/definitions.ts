export type BannerData = {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
};

export type Resultado = {
  name: string;
  id: number;
};

export type Generos = {
  id: number;
  name: string;
};

export type Pelis = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
};

export type Movie = {
  id: number;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
};

export interface FavButtonProps {
  ident: number;
}
