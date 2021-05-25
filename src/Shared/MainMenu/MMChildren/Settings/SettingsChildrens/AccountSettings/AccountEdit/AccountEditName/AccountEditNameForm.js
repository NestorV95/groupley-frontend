import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import UpdateUser from '../../../../../../../../redux/actions/currentUser/UpdateUser'

const AccountEditNameForm = ({toggle}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const dispatch = useDispatch()

    const updateName = () => {
        const newName = {
            first_name: firstName,
            last_name: lastName,
        }
        dispatch( UpdateUser( newName ) )
    }
    
    return (

        <div>

            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='first name' /><br/>
            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='last name' /><br/> 
            <button onClick={()=>updateName()}>sign up</button>
            <button onClick={()=>toggle()}>back</button>
        </div>

    )
  
}

export default AccountEditNameForm
