import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import Popular from "./containers/Popular/Popular";
import Airing from "./containers/Airing/Airing";
import AnimeInfo from "./containers/AnimeInfo/AnimeInfo";
import {IAnimeAPI} from "./types";

const baseUrl = "https://api.jikan.moe/v4";

const App = () => {

  const [popularAnime, setPopularAnime] = useState<IAnimeAPI[]>([]);
  const [selectedID, setSelectedID] = useState<number | null>(null);

  const fetchData = useCallback(async () => {
      const response = await axios.get(`${baseUrl}/top/anime?filter=bypopularity`); // узнать насчет типизации, тк можно работать только с response.data.data
    console.log(response.data.data[0]);
      setPopularAnime(response.data.data);
  }, []);

  useEffect(() => {
    fetchData().catch(e => console.error(e));
  }, [fetchData]);

  return (
    <>
      <Toolbar/>
      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="/popular" element={(<Popular popularAnime={popularAnime} setID={setSelectedID} />)} />
        <Route path="/popular/:id" element={(<AnimeInfo id={selectedID} />)} />

        <Route path="/airing" element={(<Airing />)} />
      </Routes>
    </>
  );
};

export default App;
