import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';
import './index.css';

const imageUrl = "https://image.tmdb.org/t/p/w500";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  
  useEffect(() => { 
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    // Check if popularMovies has been populated before mapping over it
    if (!popularMovies || popularMovies.length === 0) {
      return <div>Loading...</div>;
    }

    return popularMovies.map((movie, i) => (
      <div className="movie-wrapper" key={i}>
        <div className="movie-title">{movie.title}</div>
        <img src={`${imageUrl}/${movie.poster_path}`} className="movie-image" alt={movie.title} />
        <div className="movie-date">Release: {movie.release_date}</div>
        <div className="movie-rate">Rating: {movie.vote_average}</div>
      </div>  
    ));
  };

  const Footer = () => {
    return (
      <div className='footer'>
        <div className='foot'>
        <h3 className='title'>Movies Mania</h3>
        <p>copyright @2024</p>
        </div>
      </div>
    )
  }

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results)
    }
  };

  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='mov-text text-2xl text-black'>Movies Mania</h1>
        <input placeholder='Cari film....' className='movie-search' onChange={ (e) => search(e.target.value)} />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
      <Footer /> 
    </div>
    
  );
};


export default App;
