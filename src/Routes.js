import React from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import CalanderLayout from "./Calander/CalanderLayout"
import DashboardLayout from "./Dashboard/DashboardLayout"
import HomeLayout from "./Home/HomeLayout"
import ListsLayout from "./Lists/ListsLayout"
import LoginLayout from "./LogIn/LoginLayout"
import SignUpLayout from "./SignUp/SignUpLayout"

const Routes = () => {

    return(
        <Router>
            <Switch>
                <Route path='/' exact component={HomeLayout}/>
                <Route path='/calander' exact component={CalanderLayout}/>
                <Route path='/dashboard' exact component={DashboardLayout}/>
                <Route path='/lists' exact component={ListsLayout}/>
                <Route path='/login' exact component={LoginLayout}/>
                <Route path='/signup' exact component={SignUpLayout}/>
            </Switch>
        </Router>
    )
}

export default Routes
