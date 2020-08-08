import React, { Fragment } from 'react'

import PokeCard from './PokeCard'
import { Grid } from '@material-ui/core'

export default function List({ pokedata }) {
    return (
        <Fragment>

            <Grid container justify='center'>

                {pokedata.map((pokemon, index) => {

                    let url = process.env.REACT_APP_API_POKEMON_SPRITES;
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

                    return <PokeCard key={index} to={`/poke-Info/${pokeIndex}/${pokemon.name}`} name={pokemon.name} image={`${url}/${pokeIndex}.png`} />

                })}

            </Grid>


        </Fragment>

    )
}
