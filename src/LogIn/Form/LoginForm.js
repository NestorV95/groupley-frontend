//------------------------------------------- packages -------------------------------------------//
import React,{ useEffect , useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch} from 'react-redux' 
//------------------------------------------ components ------------------------------------------//
import logInUser from '../../redux/actions/currentUser/loginUser'
import {authenticated} from '../../redux/actions/auth/authStatus'
//-------------------------------------------- styles --------------------------------------------//
import './LoginForm.css'
//----------------------------------------- login in form ----------------------------------------//
const LogInForm = () => {
    const [ signUp , setSignUp ] = useState(false)
    const [ error , setError ] = useState('')
    const [ username , setUsername ] = useState('')
    const [ password , setPassword ] = useState('')

    useEffect(()=>{
        setSignUp(false)
    },[])

    const dispatch = useDispatch()

    const validateLogin = () => {
        if( !authenticated ){
            setError( 'Username or password is not valid' )
        }
    }

    const HandleSubmit = e => {
        e.preventDefault()
        const log = { 
            username: username, 
            password: password 
        }
        if(password !== '' && username !== ''){ 
            dispatch( logInUser( log ) ) 
            validateLogin()
        }
        
    }

    return(
        <form className="lif-div" onSubmit={ e => HandleSubmit(e) } >
            <p className="lif-text lif-title">Login</p>
            { error !== "" ? <p className="lif-text lif-or" >{error}</p> : null }
            <input required className="lif-text lif-input" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/> <br/>
            <input required className="lif-text lif-input"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/> <br/> 
            <button className="lif-text lif-button" type="submit" >Log In</button>
            <p className="lif-text lif-or">or</p>
            <button className="lif-text lif-button" onClick={ () => setSignUp( true ) }>Sign Up</button>
            { signUp ? <Redirect to="/signup"/> : null }
        </form>
    )
}

export default LogInForm
