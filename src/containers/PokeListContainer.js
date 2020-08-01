import React, { Component, Fragment } from 'react'
import List from '../components/List'
import axios from "axios";

import { Typography, Toolbar, AppBar } from "@material-ui/core";
import { withStyles } from "@material-ui/core";


class PokeListContainer extends Component {

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

        const { classes } = this.props

        const { pokeData } = this.state

        return (

            <Fragment>
                <AppBar className={classes.NavColor} position="static">
                    <Toolbar variant="dense" >
                        <Typography variant='h6' component='p' >PokeApp</Typography>
                    </Toolbar>
                </AppBar>

                <List pokedata={pokeData} />

            </Fragment>
        )
    }
}

export default withStyles({
    NavColor: {
        backgroundColor: '#EF5350'
    }
})(PokeListContainer);