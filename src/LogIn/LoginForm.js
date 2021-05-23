//------------------------------------------- packages -------------------------------------------//
import React,{useEffect,useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' 
//------------------------------------------ components ------------------------------------------//
import logInUser from '../redux/actions/currentUser/loginUser'
// import authenticate  from '../redux/actions/auth/authenticate'
import tokenCheck from '../redux/actions/auth/tokenCheck'
import tokenValidation from '../redux/actions/auth/tokenValidation'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- login in form ----------------------------------------//
const LogInForm =props => {
    const {status, valid} = useSelector(state => state.authState.token)
    const [signUp, setSignUp] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        setSignUp(false)
    },[])

    const dispatch = useDispatch()

    const HandleSubmit=()=>{
        const log={username: username,password: password}
        dispatch(logInUser(log))
        dispatch(tokenCheck())
        dispatch(tokenValidation())
        
    }

    return(
        <>
            { status === true && valid === true? 
                <Redirect to="/dashboard" /> 
                :
                <div>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/> <br/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/> <br/>
                <button onClick={()=>setSignUp(true)}>sign up</button>
                <button onClick={()=>HandleSubmit()}>log in</button>
                {signUp? <Redirect to="/signup"/> : null}
                </div>
            }
        </>
    )
}

export default LogInForm
