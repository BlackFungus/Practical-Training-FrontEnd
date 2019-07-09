import React, { Component } from 'react'
import {Grid,Container} from '@material-ui/core';

import CardTopic from '../cardTopic/cardTopic'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Container style={{ marginTop: 60,marginLeft:20}} maxWidth="xl">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <CardTopic></CardTopic>
                    </Grid>
                    <Grid item xs={3}>
                        <CardTopic></CardTopic>
                    </Grid>
                    <Grid item xs={3}>
                        <CardTopic></CardTopic>
                    </Grid>
                    <Grid item xs={3}>
                        <CardTopic></CardTopic>
                    </Grid>
                </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default Home