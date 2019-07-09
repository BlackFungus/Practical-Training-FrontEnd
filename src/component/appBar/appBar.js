import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MenuIcon, arrowBackIcon } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'black',
    height: '70',
    'background-color': 'white',
    boxShadow: '0 0 0 0',
    border: '1px solid rgb(243, 243, 243)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  font: {
    color: 'white'
  },
  icon: {
    margin: theme.spacing(0),
  },
  title: {
    flexGrow: 1
  },
  ContainerPadding:{
    paddingLeft:'177px',
    paddingRight:'148px'
}
}));

export default function DenseAppBar(props) {
  const classes = useStyles();
  const match = props.state.match
  const history = props.state.history
  const location = props.state.location
  console.log(props)
  return (
    <div className={classes.root}>
      <AppBar color="default" className={classes.root}>
      <Container maxWidth="xl" className={classes.ContainerPadding}>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            {match.url == '/register'? <Icon className={classes.icon} onClick={props.goBack}>arrow_back</Icon> : null}
            {location.pathname!="/dashboard"&&location.pathname!="/login"&&location.pathname!="/register"? <Icon className={classes.icon} onClick={props.gobackHome}>arrow_back</Icon> : null}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            BBS
          </Typography>
          {(match.url!='/register'&&match.url!='/login')?<div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={()=>history.push(`${match.url}/topic`)}>
            <Icon className={classes.icon} >note_add</Icon>
          </IconButton>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={()=>history.push(`${match.url}/communication`)}>
            <Icon className={classes.icon} >question_answer</Icon>
          </IconButton>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={()=>history.push(`${match.url}/person`)}>
            <Icon className={classes.icon} >person</Icon>
          </IconButton>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={props.logout}>
            <Icon className={classes.icon} >clear</Icon>
          </IconButton>
          </div>:null}
        </Toolbar>
        </Container> 
      </AppBar>
    </div>
  );
}