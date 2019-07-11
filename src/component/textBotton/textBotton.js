import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import withStyles from 'react-jss'

import { connect } from 'react-redux'
import { getMain } from '../../redux/topic.redux'



const styles = {
    marginTop:{
        marginTop:'10px!important'
    }
}

class TextBotton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        // this.classes = this.useStyles();
        this.useStyles = makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
            },
            input: {
                display: 'none',
            },
        }))
        // this.a = this.useStyles()
    }
    useStyles() {
        return makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
            },
            input: {
                display: 'none',
            },
        }))
    }

    render() {
        // console.log(this.props)
        const {classes} = this.props
        return (
            <div>
                {/* {console.log(this.useStyles)} */}
                <Button variant="contained" className={classes.marginTop} onClick={this.props.getMain}>
                    Default
                </Button>
            </div>
        );
    }
}

const mapStatetoprops = (state) => {
    return state
}

const actionCreators = { getMain }

TextBotton = connect(mapStatetoprops,actionCreators)(TextBotton)

export default withStyles(styles)(TextBotton)




