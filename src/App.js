import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import {movieData} from "./data"
import MovieTrailer from './Components/MovieTrailer';
import { Routes , Route} from 'react-router-dom';
import Profile from './Components/Profile';
function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("")
  const [filterRating, setFilterRating] = useState(0)
  
  return (
    <div className="">
     <Filter filterRating={filterRating} setFilterRating={setFilterRating} setFilterTitle={setFilterTitle}/>
     <Routes>
      <Route path="/" element={<MovieList movies = {movies} filterTitle={filterTitle} filterRating={filterRating} setMovies={setMovies}/>} />
      <Route path="/:title" element={<MovieTrailer movies={movies} />} />
      <Route path="/profile" element={<Profile />}/>
     </Routes>
    </div>
  );
}

export default App;
