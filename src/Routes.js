import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import PokeListContainer from './containers/PokeListContainer'


export default function Routes() {
    return (
        <div>

            <BrowserRouter>
                <Switch>

                    <Route exact path='/' component={Home} />
                    <Route path='/pokemons' component={PokeListContainer} />

                </Switch>
            </BrowserRouter>

        </div>
    )
}
