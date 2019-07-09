import React from 'react'
import clsx from 'clsx';
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { Container, Button, Typography, TextField } from '@material-ui/core';



import ButtonAppBar from '../../component/appBar/appBar'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      borderRadius:"50px",
      marginTop:40,
    //   position:'absolute',
    //   right:'15px'
    },
    input: {
      display: 'none',
    },
  }));

const style = {
    root: {
        boxShadow: "0 0 0 0"
    },
    font: {
        color: "yellow!important"
    }, 
    button: {
        // margin: theme.spacing(1),
        'border-radius':"50!important"
    }
}

const  MyBottonLogin = function(props){
    const classes = useStyles()
    return (<Button variant="outlined" size="large" className={classes.button} onClick={props.login} >登陆</Button>)
  }

  const  MyBottonRegister = function(props){
    const classes = useStyles()
    return (<Button variant="outlined" size="large" className={classes.button} onClick={props.login} >注册</Button>)
  }

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
        this.goBack = this.goBack.bind(this)
    }
    goBack(){
        this.props.history.goBack()
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <ButtonAppBar state={this.props} goBack={this.goBack}></ButtonAppBar>
                <Container maxWidth="lg" style={{marginTop:150,position:'relative'}}>
                    {console.log(this.props)}
                    {this.props.user.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
                    <Typography variant="h4" color="inherit" className="fromInput">
                       注册
                    </Typography>
                    <TextField
                        id="standard-dense"
                        label="请输入用户名"
                        // className={clsx(classes.textField, classes.dense)}
                        margin="normal"
                        // className="fromInput"
                        fullWidth
                    // value={values.name}
                    // onChange={handleChange('name')}
                    // className={classes.root}
                    />
                     <TextField
                        id="standard-dense"
                        label="请输入学号"
                        margin="normal"
                        // className="fromInput"
                        fullWidth
                    />
                    <TextField
                        id="standard-dense"
                        label="请输入密码"
                        type="password"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        id="standard-dense"
                        label="请再次输入密码"
                        type="password"
                        margin="normal"
                        fullWidth
                    />
                    <MyBottonRegister></MyBottonRegister>
                </Container>
            </div>
        )
    }
}

const mapStatetoprops = (state) => {
    return state
}

const actionCreators = { login }

Register = connect(mapStatetoprops, actionCreators)(Register)



export default Register