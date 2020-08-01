import React, { Component } from 'react'
import Axios from 'axios'

export default class HomeContainer extends Component {


    componentDidMount() {

        Axios.get('https://pokeapi.co/api/v2/pokemon/8')
            .then(result => {
                console.log(result.data);
            })
            .catch(console.log)

    }


    render() {
        return (
            <div>
                <h1>Poke App</h1>
            </div>
        )
    }
}
