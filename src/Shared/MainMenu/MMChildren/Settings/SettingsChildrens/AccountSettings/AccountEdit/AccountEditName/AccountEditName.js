import React,{useState} from 'react'
import AccountEditNameButton from './AccountEditNameButton'
import AccountEditNameForm from './AccountEditNameForm'

const AccountEditName = () => {
    const [toggle,setToggle] = useState(false)

    const tog = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            {toggle?
                <AccountEditNameForm toggle={tog}/>
                :
                <AccountEditNameButton toggle={tog}/>   
            }
        </div>
    )
}

export default AccountEditName
