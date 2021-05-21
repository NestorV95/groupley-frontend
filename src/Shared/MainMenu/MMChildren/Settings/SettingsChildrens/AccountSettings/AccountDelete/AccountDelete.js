import React,{useState} from 'react'
import AccountDeleteForm from './AccountDeleteForm'
import AccountDeletePrompt from './AccountDeletePrompt'

const AccountDelete = ({destroy}) => {
    const [confirm, setConfirm] = useState(false)

    const conf = () => {
        setConfirm(true)
    }
    const cancel =() =>{
        setConfirm(false)
        destroy()
    }

    return (
        <div>
            {confirm?
                <AccountDeleteForm cancel={cancel}/>
                :
                <AccountDeletePrompt confirm={conf} cancel={destroy}/>  
            }
            
        </div>
    )
}

export default AccountDelete
