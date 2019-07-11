import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'



import ChangePersonData2 from '../changePersonData/changePersonData2'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
    myIcon: {
        fontSize: '16px',

    },
    button: {
        margin: '0 auto'
    }
}));

export default function ListDividers(props) {
    const classes = useStyles();
    // console.log(props)
    return (
        <React.Fragment>
            <Paper>
                <List component="nav" className={classes.root} aria-label="Mailbox folders">
                    <ListItem>
                        <div className={classes.button}><ChangePersonData2></ChangePersonData2></div>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary={
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>班级</Typography>
                            </React.Fragment>
                        } secondary={<React.Fragment>
                            <Typography variant="body1">
                                {props.data.ClassNum}
                            </Typography></React.Fragment>
                        } />
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemText primary={
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>电话</Typography>
                            </React.Fragment>
                        } secondary={
                            <React.Fragment>
                                <Typography variant="body1">
                                    {props.data.phoneNum}
                                </Typography>
                            </React.Fragment>
                        } />
                    </ListItem>
                    <Divider light />
                    <ListItem >
                        <ListItemText primary={
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>QQ</Typography>
                            </React.Fragment>
                        } secondary={
                            <React.Fragment>
                                <Typography variant="body1">
                                    {props.data.QQNum}
                                </Typography>
                            </React.Fragment>
                        } />
                    </ListItem>
                    <Divider light />
                    <ListItem >
                        <ListItemText primary={
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>邮箱</Typography>
                            </React.Fragment>
                        } secondary={
                            <React.Fragment>
                                <Typography variant="body1">
                                    {props.data.Email}
                                </Typography>
                            </React.Fragment>
                        } />
                    </ListItem>
                    <Divider light />
                    <ListItem >
                        <ListItemText primary={
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>籍贯</Typography>
                            </React.Fragment>
                        } secondary={
                            <React.Fragment>
                                <Typography variant="body1">
                                    {props.data.nativePlace}
                                </Typography>
                            </React.Fragment>
                        } />
                    </ListItem>

                </List>
            </Paper>
        </React.Fragment>
    );
}
