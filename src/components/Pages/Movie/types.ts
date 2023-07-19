interface IGenre {
  id: number;
  name: string;
}

interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface IMovieViewProps {
  adult?: false;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget?: number;
  genres?: IGenre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: IProductionCompany[];
  production_countries?: IProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: ISpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: false;
  vote_average?: number;
  vote_count?: number;
  isLoading: boolean;
}
