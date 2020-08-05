import React, { Fragment } from 'react'

import PokeCard from './PokeCard'
import { Grid } from '@material-ui/core'

export default function List({ pokedata }) {
    return (
        <Fragment>

            <Grid container justify='center'>

                {pokedata.map((pokemon, index) => {

                    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
                    // let url = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork";
                    // let url = "https://pokeres.bastionbot.org/images/pokemon"
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

                    // Enviar a PokeCard el nombre y la imagen como sigue:
                    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
                    // return <PokeCard name={pokemon.name} image={`${url}/${pokeIndex}.png?raw=true`} />
                    return <PokeCard to={`/poke-Info/${pokeIndex}`} name={pokemon.name} image={`${url}/${pokeIndex}.png`} />

                })}

            </Grid>


        </Fragment>

    )
}
