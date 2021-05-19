import React,{useState} from 'react'
import PostUser from '../helpers/PostUser.js'

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const HandleSubmit=e=>{
        const newUser = {
            // eslint-disable-next-line
            ['first_name']: firstName,
            // eslint-disable-next-line
            ['last_name']: lastName,
            username: username,
            email: email,
            password: password,
            // eslint-disable-next-line
            ['password_confirmation']: passwordConfirmation
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
            <button onClick={e=>HandleSubmit(e)}>sign up</button>

        </div>

    )
}

export default SignUp