import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { getData } from '../../redux/personData.redux'

import PersonAppBar from '../personAppBar/personAppBar'
import PersonLeftList from '../personLeftList/personLeftList'
import PersonDataTab from '../personDataTab/personDataTab'

class PersonData extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount(){
        this.props.getData(this.props.user.sid)
    }
    handleChange(name,key){
        this.setState({
            [name]: key
        })
    }
    render() {
        return (
            <React.Fragment>
                <PersonAppBar data={this.props.user}></PersonAppBar>
                <Container maxWidth="xl" style={{ marginTop: '192px', paddingLeft: '195px', paddingRight: '195px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}><PersonLeftList data={this.props.personData}></PersonLeftList></Grid>
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

const mapStatetoprops = (state) => {
    return state
}
const actionCreators = { getData }
PersonData = connect(mapStatetoprops, actionCreators)(PersonData)

export default PersonData