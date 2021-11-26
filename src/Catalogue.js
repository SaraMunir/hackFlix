import React from 'react'
import {Link} from 'react-router-dom'

function Catalogue(props) {
    const movies = props.movies
    return (
    <ul className='catalogue'>
        {movies.map(mov=>    
        <li className="movie" key={mov.id}>
            <Link to={`/movie/${mov.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt={mov.original_title} />
            </Link>
        </li>
        )}
    </ul>
    )
}

export default Catalogue
