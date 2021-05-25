import React,{useState} from 'react'
import AccountEditPasswordButton from './AccountEditPasswordButton'
import AccountEditPasswordForm from './AccountEditPasswordForm'

const AccountEditPassword = () => {
    const [toggle, setToggle] = useState(false)

    const tog = () =>{
        setToggle(!toggle)
    }
    return (
        <div>
            {toggle?
                <AccountEditPasswordForm toggle={tog}/>
                :
                <AccountEditPasswordButton toggle={tog}/>
            }
        </div>
    )
}

export default AccountEditPassword
