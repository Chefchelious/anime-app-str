import React, {useCallback, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {IAnimeAPI} from "../../types";

import plakImg from '../../img/plak.png';

import './AnimeInfo.css';

const baseUrl = "https://api.jikan.moe/v4";

const AnimeInfo: React.FC = () => {

  const { id } = useParams() as { id: string };

  const [anime, setAnime] = useState<IAnimeAPI | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const animeResponse = await axios.get(`${baseUrl}/anime/${id}`);

      setAnime(animeResponse.data.data);
    } catch (e) {
      console.log(e);
      alert('Something went wrong!');
    }
  }, [id]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);


  return anime && (
    <div className="container" style={{paddingTop: '150px'}}>
      <Link to='/popular' className="back-btn"> Back to popular</Link>
      <h1 className="anime__title">{anime.title_english}</h1>

      <div className="anime__info">
        <div className="anime__img-wrap">
          <img className="anime__img" src={anime.images.jpg.large_image_url} alt={anime.title_english} />
        </div>

        <div className="anime__stats">
          <p><strong className="anime__local-heading">Aired:</strong>{anime.aired.string}</p>
          <p><strong className="anime__local-heading">Rating:</strong>{anime.rating}</p>
          <p><strong className="anime__local-heading">Score:</strong>{anime.score}</p>
          <p><strong className="anime__local-heading">Scored by:</strong>{anime.scored_by}</p>
          <p><strong className="anime__local-heading">Status:</strong>{anime.status}</p>
          <p><strong className="anime__local-heading">Episodes:</strong>{anime.episodes}</p>
          <p><strong className="anime__local-heading">Duration:</strong>{anime.duration}</p>
        </div>
      </div>
      
      <div className="anime__player">
        <div>Здесь должен быть плейер, но его не будет ...</div>
        <img src={plakImg} alt="plak"/>
      </div>
    </div>
  );
};

export default AnimeInfo;