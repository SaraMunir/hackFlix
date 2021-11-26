import {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import MovieDetail from './MovieDetail';
import Catalogue from './Catalogue';
function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    console.log('movies loading')
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '5b4dbf95cc35d2e911560cca64385e60',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999,
      },
    }).then( (res) => {
      const movieResults = res.data.results;
      console.log(movieResults)
      // Store the API results to the "movies" state value...
      setMovies(movieResults);
    })
  }, []);
  return (
    <Router>
      <div className="wrapper">
        <header>
          <Link className='link' to="/">
            <h1>HackFlix</h1>
          </Link>
        </header>
        <Routes>
          <Route path='/' element={ <Catalogue movies={movies}/>}/>
          <Route path='movie/:movieId' element={<MovieDetail/>}/>
        </Routes>
      </div>
  </Router>
  );
}

export default App;
