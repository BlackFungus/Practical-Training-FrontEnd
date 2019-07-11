import React from 'react'
import clsx from 'clsx';
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import withStyles from 'react-jss'
import { styled } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, TextField } from '@material-ui/core';

import ButtonAppBar from '../../component/appBar/appBar'
import TextBotton from '../../component/textBotton/textBotton'



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
        borderRadius: "50px",
        marginTop: 40
    },
    button2: {
        margin: theme.spacing(0),
        borderRadius: "50px",
        marginTop: 40
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
    }
}

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    handleLogin(){
        this.props.login(this.state)
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
                <ButtonAppBar state={this.props}></ButtonAppBar>
                <Container maxWidth="lg" style={{ marginTop: 150, position: 'relative' }}>
                    {/* {console.log(this.props)} */}
                    {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
                    <Typography variant="h4" color="inherit" className="fromInput">
                        登陆
                    </Typography>
                    <TextField
                        id="standard-dense"
                        label="请输入用户名"
                        // className={clsx(classes.textField, classes.dense)}
                        margin="normal"
                        // className="fromInput"
                        fullWidth

                        // onChange={v=>console.log(v)}
                        onChange={handleChange('username')}
                    // className={classes.root}
                    />
                    <TextField
                        id="standard-dense"
                        label="请输入密码"
                        type="password"
                        // className={clsx(classes.textField, classes.dense)}
                        margin="normal"
                        // className="fromInput"
                        fullWidth
                        onChange={handleChange('password')}
                    // className={classes.root}
                    />
                    <div style={{ marginTop: 50 }}>
                        <Button variant="outlined" onClick={this.handleLogin} size="large" className={classes.button} >登陆</Button>
                        <Button variant="outlined" onClick={this.register} size="large" className={classes.button} style={{ marginLeft: 20 }}>注册</Button>
                    <TextBotton></TextBotton>
                    
                    
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStatetoprops = (state) => {
    return state.user
}
const actionCreators = { login }

Login = connect(mapStatetoprops, actionCreators)(Login)

Login = withStyles(style, { name: "MuiButton" })(Login)

export default Login