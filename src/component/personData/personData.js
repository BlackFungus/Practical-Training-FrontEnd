import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import PersonAppBar from '../personAppBar/personAppBar'
import PersonLeftList from '../personLeftList/personLeftList'
import PersonDataTab from '../personDataTab/personDataTab'

class PersonData extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <PersonAppBar></PersonAppBar>
                <Container maxWidth="xl" style={{ marginTop: '192px', paddingLeft: '195px', paddingRight: '195px' }}>

                    <Grid container spacing={2}>
                        <Grid item xs={2}><PersonLeftList></PersonLeftList></Grid>
                        <Grid item xs={10}>
                            <Paper>
                                <PersonDataTab></PersonDataTab>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

            </React.Fragment>
        )
    }
}

export default PersonData