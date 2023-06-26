import React from 'react';
import {Link} from "react-router-dom";
import {IAnimeAPI} from "../../types";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import './Popular.css';

interface IProps {
  popularAnime: IAnimeAPI[];
  setID: (id: number) => void;
}

const Popular: React.FC<IProps>= ({popularAnime, setID}) => {

  return (
    <div className="container" style={{ paddingTop: '150px'}}>
      <div className="cards">

        {popularAnime.map(anime => (
          <Link to={`/popular/${anime.mal_id}`} key={anime.mal_id}
               className="card-wrapper"
                onClick={() => setID(anime.mal_id)}
          >
            <AnimeCard anime={anime} />
          </Link>
        ))}

      </div>

    </div>
  );
};

export default Popular;