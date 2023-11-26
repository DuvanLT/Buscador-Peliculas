import './App.css';
import { useRef, useState } from 'react';
import {Movies} from './componentes/Movies.jsx'
import useFetchMovies from "./api/Api.js";
import Titulo from './componentes/Titulo.jsx'

function App() {
  const API_KEY = '7cde689ae0b7117fbae9b071d2a09aaf';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const { movieData, setUrl } = useFetchMovies();
  const inputRef = useRef()
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current.value
    console.log(query)
    handleSearch()
    setSearching(true)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    setUrl(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);

  }

 
  return (
    <div className="App">
      <header className='encabezado'>
          <h1>BUSCA TU PELICULA FAVORITA</h1>
          <form onSubmit={handleSubmit}>
          <input ref={inputRef} onChange={handleChange} type="text" name='query' className='input-busqueda' placeholder='Pokemon, Shrek'/>
          <button type="submit">Buscar</button>
          </form>
      </header>
      <main>
      <div className="movies">
      <Titulo searching={searching} />
      <Movies movieData={movieData} />
      </div>
      </main>
    </div>
  );
}

export default App

