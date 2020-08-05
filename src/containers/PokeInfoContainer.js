import React, { Component, Fragment } from 'react'

export default class PokeInfoContainer extends Component {

    render() {

        const { match } = this.props;

        return (

            <Fragment>
                <h1>Poke Info</h1>
                <p> {console.log(this.props)}</p>
            </Fragment>

        )
    }
}
