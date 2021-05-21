//------------------------------------------- packages -------------------------------------------//
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React from "react"
//------------------------------------------ components ------------------------------------------//
import CalanderLayout from "./Calander/CalanderLayout"
import DashboardLayout from "./Dashboard/DashboardLayout"
import HomeLayout from "./Home/HomeLayout"
import ListsLayout from "./Lists/ListsLayout"
import LoginLayout from "./LogIn/LoginLayout"
import SignUpLayout from "./SignUp/SignUpLayout"
//-------------------------------------------- styles --------------------------------------------//

//-------------------------------------------- routes  -------------------------------------------//
const Routes = props => {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component = { props => <HomeLayout {...props} /> } /> 
                <Route path='/calander' exact component = { props => <CalanderLayout {...props} /> } />
                <Route path='/dashboard' exact component = { props => <DashboardLayout {...props} /> } />
                <Route path='/lists' exact component = { props => <ListsLayout {...props} /> } />
                <Route path='/login' exact component = { props => <LoginLayout {...props} /> } />
                <Route path='/signup' exact component = { props => <SignUpLayout {...props} /> } />
            </Switch>
        </Router>
    )
}

export default Routes
