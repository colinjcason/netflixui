import { useState, useEffect } from 'react'
import axios from 'axios'
import Movies from "./components/Movies"
import Hero from './components/Hero'
import Header from './components/Header'

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
    axios.get(`${URL}${endpoints.originals}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then((res) => setOriginals(res.data.results))

    axios.get(`${URL}${endpoints.trending}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then((res) => setTrending(res.data.results))

    axios.get(`${URL}${endpoints.now_playing}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then((res) => setNowPlaying(res.data.results))

    axios.get(`${URL}${endpoints.popular}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then((res) => setPopular(res.data.results))

    axios.get(`${URL}${endpoints.top_rated}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then((res) => setTopRated(res.data.results))

    axios.get(`${URL}${endpoints.upcoming}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then((res) => setUpcoming(res.data.results))
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero movie={originals[Math.floor(Math.random() * originals.length)]} />
      <Movies title='Netflix Originals' movies={originals} />
      <Movies title='Trending' movies={trending} />
      <Movies title='Now Playing' movies={nowPlaying} />
      <Movies title='Popular' movies={popular} />
      <Movies title='Top Rated' movies={topRated} />
      <Movies title='Upcoming' movies={upcoming} />
    </div>
  );
}

export default App;
