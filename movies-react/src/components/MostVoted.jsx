import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from './MoviesCards'
import styles from '../styles/MovieList.module.css'
export default function MostVoted() {

    const [peliculas, setPeliculas] = useState([]);
    
    useEffect(() => {

        fetch("https://api.themoviedb.org/3/discover/movie", {

            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then(result => result.json())
        .then(data => setPeliculas(data.results))
    },[]); 

    let filter = peliculas.filter(peli => peli.vote_average >= 7)
    console.log(filter)

    return (<div>
        <ul className={styles.movieGrid}>

            {filter.map(movie =>
                    <MovieCard key={movie.id}  movie={movie}/>
                    )
            }
        </ul>
    </div>)
}
