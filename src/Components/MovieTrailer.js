import React from 'react'
import { Rating } from '@mui/material'
import { useParams } from 'react-router-dom'

const MovieTrailer = ({movies}) => {
    const {title} = useParams ()
    const movie = movies.find(element => element.title === title)
  return (
    <div>
        <h1>Title: {movie.title}</h1>
        <img style={{width: 300}} src={movie.posterURL} alt="" />
        <p>Description:{movie.description} </p>
        <Rating  value={movie.rating} readOnly />
        <iframe width="560" height="315" src={'https://www.youtube.com/embed/${movie.trailer}'} ></iframe>
    </div>
  )
}

export default MovieTrailer