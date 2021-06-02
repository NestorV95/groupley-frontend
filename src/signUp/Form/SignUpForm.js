//------------------------------------------- packages -------------------------------------------//
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import signUpUser from '../../redux/actions/currentUser/signUpUser'
//-------------------------------------------- styles --------------------------------------------//
import './SignUpForm.css'
//----------------------------------------- sign up form -----------------------------------------//
const SignUpForm = () => {
    const [ error , setError ] = useState('')
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
     
    const HandleSubmit = e => {
        e.preventDefault()
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }

        password === passwordConfirmation ? 
            PostUser(newUser) 
            : 
            setError( 'Password and password confirmation must match' )
        
    }  
    
    return (
        <form className="suf-div" onSubmit={ e =>HandleSubmit(e)}>
            <p className="suf-text suf-title">Sign Up</p>
            { error !== "" ? <p className="suf-text">{error}</p> : null }
            <input required className="suf-text suf-input" type="text" value={firstName} onChange={ e => setFirstName( e.target.value ) } placeholder='First Name' />
            <input required className="suf-text suf-input" type="text" value={lastName} onChange={ e => setLastName( e.target.value ) } placeholder='Last Name' />
            <input required className="suf-text suf-input" type="text" value={username} onChange={ e => setUsername( e.target.value ) } placeholder='Username' />
            <input required className="suf-text suf-input" type="email" value={email} onChange={ e => setEmail( e.target.value ) } placeholder='Email' />
            <input required minLength={8} maxLength={20} className="suf-text suf-input" type="password" value={password} onChange={ e => setPassword( e.target.value) } placeholder='Password' /> 
            <input required className="suf-text suf-input" type="password" value={passwordConfirmation} onChange={ e => setPasswordConfirmation( e.target.value ) } placeholder='Password Confirmation' />
            <button className="suf-text suf-button">sign up</button>
        </form>
    )
}

export default SignUpForm