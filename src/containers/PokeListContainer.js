import React, { Component, Fragment } from 'react'
import List from '../components/List'
import axios from "axios";

import AppNav from '../components/AppNav';


export default class PokeListContainer extends Component {

    constructor(props) {
        super(props)

        this.state = { pokeData: [] }
    }


    componentDidMount() {

        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                const pokeData = res.data.results

                this.setState({
                    pokeData
                })

            })
            .catch(err => console.log(err))

    }


    render() {

        const { pokeData } = this.state

        return (

            <Fragment>
                <AppNav />
                <List pokedata={pokeData} />

            </Fragment>
        )
    }
}