//------------------------------------------- packages -------------------------------------------//
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import Routes from './Routes/Routes';
import loadUser from './redux/actions/currentUser/loadUser'
import {authenticated, authStatus} from './redux/actions/auth/authStatus'
import allGroups from './redux/actions/groups/setAllGroups'
//-------------------------------------------- styles --------------------------------------------//
import './styles/App.css';
//----------------------------------------- application ------------------------------------------//
const  App = props => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( authStatus()) 
    if (authenticated === true){ dispatch( loadUser() ) }
    if (authenticated === true){ dispatch( allGroups() ) }
    // eslint-disable-next-line
  }, [])

  return (

    <div className="App">
        
      {Routes(props)}

    </div>

  );

}

export default App;
