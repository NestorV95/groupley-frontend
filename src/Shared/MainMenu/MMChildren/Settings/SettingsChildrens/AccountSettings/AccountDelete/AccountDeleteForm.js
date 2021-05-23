import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import { Redirect } from 'react-router'
import {deleteUser} from '../../../../../../../redux/reducers/currentUserReducer'

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
                    <p>Click "Confirm" to permanently delete your account</p>
                    <button onClick ={()=>cancel()}>Cancel</button>
                    <button onClick={()=>confirm()}>Confirm</button>
                </div>
            
            }
        </>
    )
}

export default AccountDeleteForm
