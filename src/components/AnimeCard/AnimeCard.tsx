import React from 'react';
import {IAnimeAPI} from "../../types";

interface IProps {
  anime: IAnimeAPI;
}

const AnimeCard: React.FC<IProps> = ({anime}) => {
  return (
    <div className="card">
      <img src={anime.images.jpg.large_image_url} alt={anime.title_english}/>
      <div className="card-text">
        <h3 style={{marginBottom: '15px'}}>{anime.title_english}</h3>
      </div>
    </div>
  );
};

export default AnimeCard;