import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = "https://api.themoviedb.org/3";
const API_KEY = "7926738b2bd8072f8d83bf09a39a5e39";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function App() {
  const [originals, setOriginals] = useState([])
  const [trending, setTrending] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    axios.get(`${URL}${endpoints}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then((res) => setOriginals(res.data.results))
  }, [])

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
