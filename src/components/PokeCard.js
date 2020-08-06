import React from 'react'

import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';


function PokeCard({ name, classes, image, to = '' }) {

    return (

        <Card className={classes.item}>

            <CardMedia
                className={classes.media}
                image={image}
                alt={name}
                title={name}
            />
            <CardContent>
                {/* link to PokeInfoContainer */}
                <Link to={to}><Typography component="p" variant="h6" color="textPrimary"> {name} </Typography></Link>
            </CardContent>

        </Card>


    )
}

export default withStyles({
    item: {
        minWidth: "350px",
        margin: "1em",
        textAlign: "center",
        boxSizing: "border-box"
    },
    media: {
        minHeight: "350px"
    }
})(PokeCard)