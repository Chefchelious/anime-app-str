import React from 'react';
import {Link} from "react-router-dom";
import {IAnimeAPI} from "../../types";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import './Popular.css';

interface IProps {
  popularAnime: IAnimeAPI[];
}

const Popular: React.FC<IProps>= ({popularAnime}) => {

  return (
    <div className="container" style={{ paddingTop: '150px'}}>
      <div className="cards">

        {popularAnime.map(anime => (
          <Link to={`/popular/${anime.mal_id}`} key={anime.mal_id}
               className="card-wrapper"
          >
            <AnimeCard anime={anime} />
          </Link>
        ))}

      </div>

    </div>
  );
};

export default Popular;