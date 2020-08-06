import React from 'react';
import PokeCard from './PokeCard';
import { Grid } from "@material-ui/core";

export default function PokeDescription({ name, pokeImage }) {

    return (

        <Grid container>

            <PokeCard image={pokeImage} name={name} />

        </Grid>

    )
}
