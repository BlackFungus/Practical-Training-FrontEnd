import React from 'react'
import clsx from 'clsx';
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
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
        this.handleRegister = this.handleRegister.bind(this)
    }
    goBack(){
        this.props.history.goBack()
    }
    handleRegister(){
        this.props.register(this.state)
    }
    render() {
        const { classes } = this.props
        const handleChange = name => event => {
            this.setState({
                [name]: event.target.value
            })
        }
        return (
            <div>
                <ButtonAppBar state={this.props} goBack={this.goBack}></ButtonAppBar>
                <Container maxWidth="lg" style={{marginTop:150,position:'relative'}}>
                    {/* {console.log(this.props)} */}
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
                        onChange={handleChange('username')}
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
                        onChange={handleChange('sid')}
                    />
                    <TextField
                        id="standard-dense"
                        label="请输入密码"
                        type="password"
                        margin="normal"
                        fullWidth
                        onChange={handleChange('password')}
                    />
                    <TextField
                        id="standard-dense"
                        label="请再次输入密码"
                        type="password"
                        margin="normal"
                        fullWidth
                        onChange={handleChange('repeatpwd')}
                    />
                    <div style={{marginTop:50}}>
                    <Button variant="outlined" size="large" onClick={this.handleRegister}>注册</Button>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStatetoprops = (state) => {
    return state
}

const actionCreators = { register }

Register = connect(mapStatetoprops, actionCreators)(Register)



export default Register