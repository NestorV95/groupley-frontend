//------------------------------------------- packages -------------------------------------------//
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import Routes from './Routes';
import {loadUser} from './redux/reducers/currentUserReducer'
//-------------------------------------------- styles --------------------------------------------//
import './App.css';
//----------------------------------------- application ------------------------------------------//
const  App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    // eslint-disable-next-line
  }, [])

  return (

    <div className="App">

      {Routes(props)}

    </div>

  );

}

export default App;
