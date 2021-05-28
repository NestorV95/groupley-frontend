//------------------------------------------- packages -------------------------------------------//
import React,{ useEffect , useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
//------------------------------------------ components ------------------------------------------//
import logInUser from '../../redux/actions/currentUser/loginUser'
//-------------------------------------------- styles --------------------------------------------//
import './LoginForm.css'
//----------------------------------------- login in form ----------------------------------------//
const LogInForm = () => {
    const [signUp, setSignUp] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        setSignUp(false)
    },[])

    const dispatch = useDispatch()

    const HandleSubmit=()=>{
        const log={ username: username , password: password }
        dispatch( logInUser(log) )
    }

    return(
       
        <div className="lif-div">
            {/* error handling on form */}
            <p className="lif-text lif-title">Login</p>
            <input className="lif-text lif-input" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/> <br/>
            <input className="lif-text lif-input"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/> <br/> 
            <button className="lif-text lif-button" onClick={()=>HandleSubmit()}>log in</button>
            <p className="lif-text lif-or">or</p>
            <button className="lif-text lif-button" onClick={()=>setSignUp(true)}>sign up</button>
            {signUp? <Redirect to="/signup"/> : null}
        </div>
     
    )
}

export default LogInForm
