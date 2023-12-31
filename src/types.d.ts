export interface ISlide {
  id: string;
  url: string;
  title: string;
  info: string;
}

export interface IAnimeApiResponse {
  data: IAnimeAPI[];
}

export interface IAnimeAPI {
  mal_id: number;
  episodes: number;
  duration: string;
  rating: string;
  title_english: string;
  score: string;
  scored_by: number;
  status: string;
  source: string;
  aired: {
    string: string;
  }
 images: {
   jpg: {
     large_image_url: string;
   }};
}

type TSquare = {
  hasItem: boolean;
  clicked: boolean
}

export type TIngredient = {
  name: string;
  price: number;
  image: string
};

export type TStateIngredient = {
  name: string;
  count: number
}
