import React,{useState} from 'react' 
import {useDispatch} from 'react-redux'

import UpdateUser from '../../../../../../../../redux/actions/currentUser/UpdateUser'

const AccountEditPasswordForm = ({toggle}) => {
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const confirmPassword = () =>{
        const newPassword  = { password: password }

        password === passwordConfirmation? 
            dispatch(UpdateUser(newPassword))
            :
            setError('Password and password confirmation must match. ')
    }

    const updatePassword = () => {
        
        password.length > 5? 
            confirmPassword()
            :
            setError('Password must be 6 characters or longer.') 
    }  
    
    return (

        <div>
            {error !== ''? <p className="set-text" >{error}</p> : null}
            <input className="set-text set-input" value={ password } onChange={ e => setPassword( e.target.value ) } placeholder='Password' />
            <input className="set-text set-input" value={ passwordConfirmation } onChange={ e => setPasswordConfirmation( e.target.value ) } placeholder='Confirmation' /> <br/>
            <button className="set-text set-btn set-ibtn" onClick={ () => updatePassword() } >Update</button>
            <button className="set-text set-btn set-ibtn" onClick={ () => toggle() } >Cancel</button>      
        </div>

    )
}

export default AccountEditPasswordForm