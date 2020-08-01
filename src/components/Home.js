import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className="App">
            <header className="App-header">

                <img src={process.env.PUBLIC_URL + '/images/pokemon.png'} alt="Pokemon logo" />
                <h1>Poke App</h1>
                <Link to='/pokemons'>Ver Pokemons</Link>
            </header>
        </div>
    )
}
