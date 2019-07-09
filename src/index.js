import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Route,Link,Switch,Redirect,BrowserRouter as Router } from 'react-router-dom'

import Dashboard from './component/dashboard/dashboard'
import Login from './container/login/login'
import Register from './container/register/register'
import reducers from './redux/reducer'

const store = createStore(reducers,applyMiddleware(thunk))

ReactDom.render(
    (<Provider store={store}>
        <Router>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='dashboard'></Redirect>
            </Switch>
        </Router>
    </Provider>),
    document.getElementById('root')
)