import React from 'react'
import styles from '../styles/MovieCard.module.css'
import { Link } from 'react-router-dom'
export default function MoviesCards({ movie }) {

    const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path

    return (<>

        <li className={styles.movieCard}>
            <Link to={"/detalles/" + movie.id}>
                <img width={230} height={345} className={styles.movieImg} src={imgURL} alt={movie.title} />
            </Link>
            <div className={styles.titulos}>{movie.title}</div>
        </li>

    </>)
}
