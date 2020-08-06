import React, { Component, Fragment } from 'react'
import PokeDescription from '../components/PokeDescription';

export default class PokeInfoContainer extends Component {

    componentDidMount() {
        // Petición a Axios
    }

    render() {

        const { match } = this.props;
        const pokeId = match.params.pokeIndex;
        const pokeName = match.params.pokeName;

        console.log(pokeName);

        let url = "https://pokeres.bastionbot.org/images/pokemon/";

        return (

            <Fragment>
                <PokeDescription name={pokeName} pokeImage={`${url}${pokeId}.png`} />
            </Fragment>

        )
    }
}
