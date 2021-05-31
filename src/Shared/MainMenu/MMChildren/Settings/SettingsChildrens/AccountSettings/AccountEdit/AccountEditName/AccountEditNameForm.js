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

            <input className="set-text set-input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' />
            <input className="set-text set-input" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' /> <br/>
            <button className="set-text set-btn set-ibtn" onClick={ ()=>updateName() } >Update</button>
            <button className="set-text set-btn set-ibtn" onClick={ ()=>toggle() } >Cancel</button>

        </div>

    )
  
}

export default AccountEditNameForm
