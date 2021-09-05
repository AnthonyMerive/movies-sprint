import React from 'react'
import MovieDetails from '../components/MovieDetails'
import App from '../App'
import styles from '../styles/App.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Routes() {
    return (<Router>
        
        <header>
            <Link to="/"><h1 className={styles.title}>Peliculas</h1></Link>
        </header>

            <Switch>
                <Route exact path="/">
                    <App />
                </Route>

                <Route exact path="/detalles/:id">
                    <MovieDetails />
                </Route>
            </Switch>


    </Router>);
}
