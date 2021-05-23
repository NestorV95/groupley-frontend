//------------------------------------------- packages -------------------------------------------//
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import Routes from './Routes/Routes';
import {loadUser} from './redux/reducers/currentUserReducer'
import tokenCheck from './redux/actions/auth/tokenCheck'
import tokenValidation from './redux/actions/auth/tokenValidation'
import loggedStatus from './redux/actions/auth/loggedStatus'
//-------------------------------------------- styles --------------------------------------------//
import './App.css';
//----------------------------------------- application ------------------------------------------//
const  App = props => {
  const {status, valid} = useSelector(state => state.authState.token)
  const {isLogged} = useSelector(state => state.authState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tokenCheck())
    dispatch(tokenValidation())
    if (status === true && valid === true){ dispatch( loggedStatus(true) )}
    if ( isLogged === true ){ dispatch( loadUser() ) }
    // eslint-disable-next-line
  }, [])

  return (

    <div className="App">

      {Routes(props)}

    </div>

  );

}

export default App;
