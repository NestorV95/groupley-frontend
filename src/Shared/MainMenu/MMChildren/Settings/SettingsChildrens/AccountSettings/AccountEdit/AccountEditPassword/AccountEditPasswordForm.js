import React,{useState} from 'react' 
import {useDispatch} from 'react-redux'

import UpdateUser from '../../../../../../../../redux/actions/currentUser/UpdateUser'

const AccountEditPasswordForm = ({toggle}) => {
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    
    const dispatch = useDispatch()
     
    const updatePassword = () => {
        console.log(password)
        console.log([passwordConfirmation])
        const newPassword  = {
            password: password,
        }
        password === passwordConfirmation? dispatch(UpdateUser(newPassword)) : console.log('error')
    }  
    
    return (

        <div>

            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' /> <br/>
            <input value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} placeholder='password confirmation' /> <br/>
            <button onClick={()=>updatePassword()}>sign up</button>
            <button onClick={()=>toggle()}>back</button>

        </div>

    )
}

export default AccountEditPasswordForm