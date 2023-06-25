export interface ISlide {
  id: string;
  url: string;
  title: string;
  info: string;
}

export interface IAnimeAPI {
  mal_id: number;
  airing: boolean;
  episodes: number;
  rating: string;
  title_english: string;
  year: number;
 images: {
   jpg: {
     large_image_url: string;
   }};
}