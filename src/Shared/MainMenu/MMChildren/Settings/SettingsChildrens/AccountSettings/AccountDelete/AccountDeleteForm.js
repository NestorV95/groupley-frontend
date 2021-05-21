import React,{useState} from 'react'

const AccountDeleteForm = ({cancel}) => {
    const [confirmation, setConfirmation] = useState("")

    const confirm=()=>{
        console.log('confirm')
    }
    return (
        <div>
            <p>please enter your password to permanently delete your account</p>
            <input value={confirmation} onChange={(e)=>setConfirmation(e.target.value)}></input><br/>
            <button onClick ={()=>cancel()}>Cancel</button>
            <button onClick={()=>confirm()}>Confirm</button>
        </div>
    )
}

export default AccountDeleteForm
