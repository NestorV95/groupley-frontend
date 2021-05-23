//------------------------------------------- packages -------------------------------------------//
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import signUpUser from '../redux/actions/currentUser/signUpUser'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- sign up form -----------------------------------------//
const SignUpForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const dispatch = useDispatch()

    const PostUser = newUser => {
        dispatch(signUpUser(newUser))
    }
     
    const HandleSubmit = () => {
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
        password === passwordConfirmation? PostUser(newUser) : console.log('nope')
    }  
    
    return (

        <div>
            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='first name' /><br/>
            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='last name' /><br/>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' /><br/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' /><br/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' /> <br/>
            <input value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} placeholder='password confirmation' /> <br/>
            <button onClick={()=>HandleSubmit()}>sign up</button>

        </div>

    )
}

export default SignUpForm