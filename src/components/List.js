import React, { Fragment } from 'react'

import PokeCard from './PokeCard'
import { Grid } from '@material-ui/core'

export default function List({ pokedata }) {
    return (
        <Fragment>

            <Grid container justify='center'>

                {pokedata.map((pokemon, index) => {

                    // let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
                    let url = "https://pokeres.bastionbot.org/images/pokemon"
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

                    return <PokeCard to={`/poke-Info/${pokeIndex}/${pokemon.name}`} name={pokemon.name} image={`${url}/${pokeIndex}.png`} />

                })}

            </Grid>


        </Fragment>

    )
}
