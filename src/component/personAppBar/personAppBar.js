import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardTopic from '../cardTopic/cardTopic'
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';

import Img from './avatar_1537451880.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: 'black',
        // height: '120px',
        'background-color': 'white',
        boxShadow: '0 0 0 0',
        border: '1px solid rgb(243, 243, 243)',
        marginTop: 66,
        borderTop: "0px solid rgba(243, 243, 243,0)",
        paddingTop: "18px",
        paddingBottom: "18px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: '3px',
        'vertical-align': 'middle',
        display: 'block'
    },
    glayFont: {
        color: '#9e9e9e'
    },
    glayIcon: {
        color: '#757575',
        marginTop: "0.3rem",
        display: 'inline-block',
        fontSize: '16px',
        position: 'absolute',
        'margin-left': '-1rem'
    },
    subtitle1_font: {
        marginLeft: '16px',
    },
    ContainerPadding:{
        paddingLeft:'177px',
        paddingRight:'177px'
    },
    myText:{
        position: 'absolute',
        right:'115px'
    }
}));

export default function PersonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root}>
                <Container maxWidth="xl" className={classes.ContainerPadding}>
                    <Toolbar>
                        <img src={Img} alt="" className={classes.img} />
                        <div className={classes.title} style={{marginLeft:15}}>
                            <Typography variant="h6">
                                BlackThalli
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom className={classes.glayFont}>
                                1711650324
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle1_font}>
                                <Icon className={classes.glayIcon}>perm_identity</Icon> 身份：<b>管理员</b>
                            </Typography>
                        </div>
                        <Typography variant="body1" className={classes.myText}>
                        这是简介这是简介这是简介这是简介<br />这是简介这是简介这是简介这是简介<br />
                        这是简介这是简介这是简介这是简介<br />
                        </Typography>
                    </Toolbar>                      
                </Container>
            </AppBar>
        </div>
    );
}