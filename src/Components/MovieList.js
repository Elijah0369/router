import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'
import { Link } from 'react-router-dom'

const MovieList = ({movies, filterTitle, filterRating, setMovies}) => {
    return (
    <div>
        <div style={{margin: "2rem"}}>
            <AddMovie  movies={movies} setMovies={setMovies}/>
        </div>

        <div className='movie-list'>
           {movies
           .filter(
            movie => movie.title.toLowerCase().trim().includes(filterTitle.toLowerCase().trim()) &&
            movie.rating >= filterRating
           )
           .map(movie => {
            return <Link to={movie.title}>
             <MovieCard Key={movie.id} movie={movie}/>
             </Link>
           })}
        </div>
    </div>   
    )
}

export default MovieList