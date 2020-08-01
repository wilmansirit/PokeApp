import React, { Fragment } from 'react'

export default function List({ pokedata }) {

    return (
        <Fragment>
            <h1>Lista de Pokemones</h1>

            <ul>
                {
                    pokedata.map((pokemon, index) => {

                        return <li
                            key={index}>{pokemon.name}</li>

                    })

                }
            </ul>

        </Fragment>

    )
}
