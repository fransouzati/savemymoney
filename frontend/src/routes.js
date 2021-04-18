import React from 'react'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Home/Dashboard'

//Auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;