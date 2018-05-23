import React from 'react';
import './Movie.css'
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="movie">
      <div className="movie__columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="movie__columns">
        <h1>{title}</h1>
        <div className="movie__genres">
          {genres.map((genre, index) =>{
            return <MovieGenre genre={genre} key={index} />
           })}
        </div>
        <div className="movie__synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="movie__poster" />
  )
}

function MovieGenre({genre}){
  return (
    <span className="movie_genre">{genre} </span>
  )
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
  synopsis:PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
