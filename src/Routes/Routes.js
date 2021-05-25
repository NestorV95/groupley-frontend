//------------------------------------------- packages -------------------------------------------//
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import {useSelector} from 'react-redux'
// import React, { createContext } from "react"
//------------------------------------------ components ------------------------------------------//
import CalanderLayout from "../Calander/CalanderLayout"
import DashboardLayout from "../Dashboard/DashboardLayout"
import HomeLayout from "../Home/HomeLayout"
import ListsLayout from "../Lists/ListsLayout"
import LoginLayout from "../LogIn/LoginLayout"
import SignUpLayout from "../SignUp/SignUpLayout"
import GroupLayout from "../Group/GroupLayout"
//-------------------------------------------- styles --------------------------------------------//

//-------------------------------------------- routes  -------------------------------------------//
const Routes = props => {
    
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={HomeLayout} /> 
                <Route exact path='/calander' component={CalanderLayout}/>
                <Route exact path='/dashboard' component={DashboardLayout} />
                <Route exact path='/groups' component={GroupLayout} />
                <Route exact path='/lists' component={ListsLayout} />
                <Route exact path='/login' component={LoginLayout} />
                <Route exact path='/signup' component={SignUpLayout} />
            </Switch>
        </Router>
    )
}

// const Routes = props=>{
//     <Router>
//             <Switch>
//                 <AuthRoute exact path='/' type="public">
//                     <HomeLayout />
//                 </AuthRoute>
//                 <AuthRoute exact path='/calander' render={CalanderLayout} type="private" />
//                 <AuthRoute exact path='/dashboard' render={DashboardLayout} type="private" />
//                 <AuthRoute exact path='/lists' render={ListsLayout}type="private" />
//                 <AuthRoute exact path='/login' type="public">
//                     <LoginLayout />
//                 </AuthRoute>
//                 <AuthRoute exact path='/signup' type="public">
//                     <SignUpLayout />
//                 </AuthRoute>
//             </Switch>
//     </Router>

// }

// const AuthRoute = (type, props) => {
//     const isLogged = useSelector(state=>state.isLoggedState.isLogged)
//     type==="public" && isLogged === true? <Redirect to="/" /> : <Redirect to="/dashboard" />
//     return <Route {...props} />
// }


// const PublicRoute = (path, component) => {
//      
//     return (
//         <Route exact path={path} component={component} />
//     )
// }

// const PrivateRoute = ({path, component:Component}) => {
//     const isLogged = useSelector(state=>state.isLoggedState.isLogged )
//    return(
//        <Route exact path={path} >
//           { isLogged?  <Component /> : <Redirect to='/' />}
//        </Route>
//    )
// }

// const ProtectedRoute = ({path, Component}) =>{

// }


// const authContext = createContext()

// const ProvideAuth=({children})=>{
//     const auth = useProvideAuth()
//     return(
//        <authContext.Provider value={auth}>
//            {children}
//        </authContext.Provider>
//     )
// }

// const useAuth=()=>{
//     return useContext(authContext)
// }

// const useProvideAuth=()=>{
//     const {currentUser} = useSelector(state => state.currentUserState)

//     const signin = cb =>{
//         return 
//     }
// }

        // <Router>
        //     <Switch>
        //         <Route exact path='/' > 
        //             {isLogged ? <Redirect to="/dashboard"/> : <HomeLayout {...props} /> }
        //         </Route> 
        //         <Route exact path='/calander'>
        //             {!isLogged ? <Redirect to="/"/> : <CalanderLayout {...props} /> }
        //         </Route>    
        //         <Route exact path='/dashboard'  >
        //             {!isLogged ? <Redirect to="/"/> : <DashboardLayout {...props} /> }
        //         </Route>
        //         <Route exact path='/lists'>
        //         {!isLogged ? <Redirect to="/"/> : <ListsLayout {...props} /> }
        //         </Route>    
        //         <Route exact path='/login'>
        //             {isLogged ? <Redirect to="dashboard"/> :  <LoginLayout {...props} /> }
        //         </Route>
        //         <Route exact path='/signup'>
        //             {isLogged ? <Redirect to="/dashboard"/> : <SignUpLayout {...props} /> }
        //         </Route>
        //     </Switch>
        // </Router>

export default Routes
