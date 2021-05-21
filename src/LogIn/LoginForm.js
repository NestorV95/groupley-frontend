//------------------------------------------- packages -------------------------------------------//
import React,{useLayoutEffect,useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux' 
//------------------------------------------ components ------------------------------------------//
import {logInUser} from '../redux/reducers/currentUserReducer'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- login in form ----------------------------------------//
const LogInForm =props => {
    
    const [signUp, setSignUp] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useLayoutEffect(()=>{
        setSignUp(false)
    },[setSignUp])

    const dispatch = useDispatch()

    const HandleSubmit=()=>{
        const log={username: username,password: password}
        dispatch(logInUser(log))
    }

    return(
        <div>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/> <br/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/> <br/>
            {/* sign up button leads to /signup */}
            <button onClick={()=>setSignUp(true)}>sign up</button>
            <button onClick={()=>HandleSubmit()}>log in</button>
            {signUp? <Redirect to="/signup"/> : null}
        </div>
    )
}

export default LogInForm
