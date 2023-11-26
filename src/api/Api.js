import { useEffect, useState } from "react";

const API_KEY = '7cde689ae0b7117fbae9b071d2a09aaf';
const BASE_URL = 'https://api.themoviedb.org/3';

const useFetchMovies = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(`${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);

  useEffect(() => {
    fetch(url_set)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data.results);
      });
  }, [url_set]);

  return { movieData, setUrl }; 
};

export default useFetchMovies;
