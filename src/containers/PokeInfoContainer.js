import React, { Component, Fragment } from 'react'
import PokeDescription from '../components/PokeDescription';
import AppNav from "../components/AppNav";

import axios from "axios";

export default class PokeInfoContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pokemonDescription: "",
            pokeName: "",
            pokeId: ""
        }
    }

    componentDidMount() {

        const { match } = this.props;
        const pokeId = match.params.pokeIndex
        const pokeName = match.params.pokeName;

        const pokeDescriptionUrl = `${process.env.REACT_APP_API_POKE_BASE_URL}pokemon-species/${pokeId}/`
        axios.get(pokeDescriptionUrl)
            .then(res => {
                const { flavor_text_entries } = res.data
                this.setState({
                    pokemonDescription: flavor_text_entries[26].flavor_text,
                    pokeName,
                    pokeId
                })
            })


    }

    render() {

        const { pokemonDescription, pokeName, pokeId } = this.state
        let url = `${process.env.REACT_APP_API_POKEMON_SPRITES}${pokeId}.png`

        return (

            <Fragment>
                <AppNav />
                <PokeDescription
                    name={pokeName}
                    pokeImage={url}
                    description={pokemonDescription}
                />
            </Fragment>

        )
    }
}
