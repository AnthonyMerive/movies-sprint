import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../styles/MovieDetails.module.css'
import {Link, useParams} from 'react-router-dom'

export default function MovieDetails() {
        
    const { id } = useParams();
   
    const [pelicula, setPelicula] = useState(null);
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/"+id, {

            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then(result => result.json())
        .then(data => setPelicula(data))
        
    },[id]); 

    if(!pelicula){
        return null
    }
    console.log(pelicula);
    const imgURL = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path

    return (<>
        <div className={styles.container}>

            <img src={imgURL} alt="{pelicula.title}" />

            <div className={styles.col}>
                <p className={styles.titulo}><strong>{pelicula.title}</strong></p>
                <p><strong>Descripcion:</strong> {pelicula.overview}</p>
                <p><strong>Generos:</strong> {pelicula.genres.map(gen => gen.name).join(", ")}</p>
                <p><strong>Lanzamiento:</strong> {pelicula.release_date}</p>
                <div className={styles.buttons}>
                <Link to="/"><button className={styles.back}><strong>Volver</strong></button></Link>
                <button className={styles.play}><strong>Reproducir</strong></button>
                </div>
                </div>
        </div>
    </>)
}
