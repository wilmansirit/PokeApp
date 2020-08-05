import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import PokeListContainer from './containers/PokeListContainer'
import PokeInfoContainer from './containers/PokeInfoContainer'


import MediaCard from './components/MediaCard'


export default function Routes() {
    return (
        <div>

            <BrowserRouter>
                <Switch>

                    <Route exact path='/' component={Home} />
                    <Route path='/pokemons' component={PokeListContainer} />
                    <Route path='/material' component={MediaCard} />
                    <Route exact path="/poke-info/:pokeIndex" component={PokeInfoContainer} />

                </Switch>
            </BrowserRouter>

        </div>
    )
}
