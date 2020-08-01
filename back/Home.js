import React, { useState, useEffect } from 'react'
import axios from "axios";


export default function Home() {

    const [pokemon, setPokemon] = useState([])


    useEffect(() => {

        getPoke()
            .then(poke => {

                setPokemon({
                    pokemon: poke.data
                })

            })
            .catch(console.log);

    }, [])

    const getPoke = async () => {

        const url = process.env.REACT_APP_API_POKE_BASE_URL + "pokemon/ditto";
        const resp = await axios.get(url);
        return resp

    }


    return (
        <div>
            {
                console.log(JSON.stringify(pokemon.pokemon))
            }
        </div>
    )
}
