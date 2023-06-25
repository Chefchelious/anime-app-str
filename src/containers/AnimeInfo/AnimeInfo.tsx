import React, {useState} from 'react';
import {IAnimeAPI} from "../../types";

interface IProps {
  id: number | null;
}

const AnimeInfo: React.FC<IProps> = ({id}) => {

  const [currentAnime, setCurrentAnime] = useState<IAnimeAPI | null>(null);


  return (
    <div style={{paddingTop: '200px'}}>
      anime item
    </div>
  );
};

export default AnimeInfo;