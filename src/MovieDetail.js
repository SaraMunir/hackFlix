import React, {useEffect, useState} from 'react'
import {  useParams } from "react-router-dom";
import axios from 'axios';


function MovieDetail() {
    const { movieId } = useParams();

    const [movie, setMovie] = useState({})


    useEffect(() => {
        console.log('movies loading')
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieId}`,
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac',
            },
        }).then( (res) => {
            const movieResults = res.data;
            console.log(movieResults)
            // Store the API results to the "movies" state value...
            setMovie(movieResults);
        })
    }, [movieId]);
    return (
        <div>
            <div className="movieHero">
                <div className="movieImageBkgfilter">
                </div>
                <img className="movieImageBkg" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title} />
                <div className="movieContent">
                    <div className="MovieTxt">
                        <h1>{movie.original_title}</h1>
                        <h4>{movie.tagline}</h4>
                        <div className="detail">
                            <p>Overview: {movie.overview}</p>
                            <p>Rating: {movie.popularity}%</p>
                            <p>Release Date: {movie.release_date}</p>
                        </div>
                    </div>
                    <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}/>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
