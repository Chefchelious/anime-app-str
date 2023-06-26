import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import Popular from "./containers/Popular/Popular";
import AnimeInfo from "./containers/AnimeInfo/AnimeInfo";
import ContactUs from "./containers/ContactUs/ContactUs";
import Portfolio from "./containers/Portfolio/Portfolio";
import Burger from "./Examples/Burger/Burger";
import Thomas from "./Examples/Thomas/Thomas";
import {IAnimeAPI, IAnimeApiResponse} from "./types";

const baseUrl = "https://api.jikan.moe/v4";

const App = () => {

  const [popularAnime, setPopularAnime] = useState<IAnimeAPI[]>([]);
  const [selectedID, setSelectedID] = useState<number | null>(null);

  const fetchData = useCallback(async () => {
      const response = await axios.get<IAnimeApiResponse>(`${baseUrl}/top/anime?filter=bypopularity`);
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

        <Route path="/contact_us" element={(<ContactUs />)} />

        <Route path="/portfolio" element={(<Portfolio />)}>
          <Route path="burger" element={(<Burger />)} />
          <Route path="thomas" element={(<Thomas />)} />
        </Route>

        <Route path="*" element={(<h1>Not Found</h1>)} />
      </Routes>
    </>
  );
};

export default App;
