import React from 'react'
import { connect } from 'react-redux'
import { Link, Route, Redirect, Switch, Router } from 'react-router-dom'
import { logout } from '../../redux/user.redux'
import { Container, Button, Typography, TextField } from '@material-ui/core';

import ButtonAppBar from '../appBar/appBar'
import CardTopic from '../cardTopic/cardTopic'
import Home from '../home/home'
import PersonData from '../personData/personData'
import Communication from '../communication/communication'
import Topic from '../topic/topic'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.gobackHome = this.gobackHome.bind(this)
    }
    gobackHome() {
        this.props.history.push('/dashboard')
    }
    render() {
        const match = this.props.match
        const histroy = this.props.history
        // console.log(this.props)
        const redirectToLogin = <Redirect to="/login"></Redirect>

        const navList = [
            {
                path: '/',
                title: "主页面",
                component: Home

            },
            {
                path: 'topic',
                title: "帖子",
                component: Topic
            },
            {
                path: 'communication',
                title: "信息",
                component: Communication
            },
            {
                path: 'person',
                title: "个人中心",
                component: PersonData
            }
        ]
        const app = (
            <React.Fragment>
                <ButtonAppBar state={this.props} logout={this.props.logout} gobackHome={this.gobackHome}></ButtonAppBar>
                <div style={{ marginTop: 69, position: 'relative' }}>
                    {/* {console.log(this.props)} */}
                    <Switch>
                        {navList.map(v => {
                            if (v.path == '/') {
                                return <Route key={v.path} path={`${match.url}`} component={v.component} exact></Route>
                            } else {
                                return <Route key={v.path} path={`${match.url}/${v.path}`} component={v.component}></Route>
                            }
                        })}
                    </Switch>
                </div>
            </React.Fragment>
        )
        // return app
        return this.props.user.isAuth ? app : redirectToLogin
    }
}

const mapStatetoProps = (state) => {
    return state
}
const actionCreators = { logout }

Dashboard = connect(mapStatetoProps, actionCreators)(Dashboard)

export default Dashboard
