import React from 'react'
import MovieDetails from '../components/MovieDetails'
import App from '../App'
import Navbar from '../components/Navbar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function Routes() {
    return (<Router>

        <Navbar />

        <Switch>
            <Route exact path="/">
                <App />
            </Route>

            <Route exact path="/details/:id">
                <MovieDetails />
            </Route>

            <Route exact path="/mostvoted">
                
            </Route>

            <Route exact path="/leastvoted">
                
            </Route>

        </Switch>


    </Router>);
}
