import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

//render: componentwillMount => render => componentDidMount
//update: componentWillReceiveProps => shouldComponentUpdate =>

class App extends Component {

  state = {

  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        key={movie.id}
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({movies});
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading .....!"}
      </div>
    );
  }
}

export default App;
