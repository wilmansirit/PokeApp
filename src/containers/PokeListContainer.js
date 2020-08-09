import React, { Component, Fragment } from 'react'
import List from '../components/List'
import AppNav from '../components/AppNav';

import axios from "axios";
import { Button } from '@material-ui/core';



export default class PokeListContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pokeData: [],
            next: "",
            previous: ""
        }
    }


    componentDidMount() {

        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {

                const { results, next, previous } = res.data

                this.setState({
                    pokeData: results,
                    next,
                    previous
                })

            })
            .catch(err => console.log(err))

    }


    nextPage = () => {
        const { next } = this.state
        axios.get(next)
            .then(res => {

                const { results, next, previous } = res.data

                this.setState({
                    pokeData: results,
                    next,
                    previous
                })

            })
            .catch(err => console.log(err))
    }

    previousPage = () => {
        const { previous } = this.state
        axios.get(previous)
            .then(res => {

                const { results, next, previous } = res.data

                this.setState({
                    pokeData: results,
                    next,
                    previous
                })

            })
            .catch(err => console.log(err))
    }

    render() {

        const { pokeData } = this.state

        return (

            <Fragment>
                <AppNav />
                <Button variant="outlined" color="secondary" onClick={this.previousPage}>Anterior</Button>
                <Button variant="outlined" color="secondary" onClick={this.nextPage}>Siguiente</Button>
                <List pokedata={pokeData} />

            </Fragment>
        )
    }
}