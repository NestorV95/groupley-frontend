import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'

import deleteUser from '../../../../../../../redux/actions/currentUser/deleteUser'

const AccountDeleteForm = ({cancel}) => {
    const [deleted, setDeleted] = useState(false)
    const dispatch = useDispatch()

    const confirm=()=>{   
        dispatch(deleteUser())
        setDeleted(true)
    }

    return (
        <>
            {deleted? 
                <Redirect to="/"/> 
                :
                <div>
                    <p className="set-text set-prompt" >Click "Confirm" to permanently delete your account.</p> <br/>
                    <button className="set-text set-btn set-ibtn" onClick={()=>cancel()}>Cancel</button>
                    <button className="set-text set-btn set-ibtn" onClick={()=>confirm()}>Confirm</button>
                </div>
            
            }
        </>
    )
}

export default AccountDeleteForm
