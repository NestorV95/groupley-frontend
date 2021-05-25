import React, { useState } from 'react'
import AccountDeleteButton from './AccountDelete/AccountDeleteButton'
import AccountDelete from './AccountDelete/AccountDelete'
import AccountEditButton from './AccountEdit/AccountEditButton'
import AccountEdit from './AccountEdit/AccountEdit'

const AccountSettings = () => {
    const [edit,setEdit] = useState(false)
    const [destroy, setDelete] = useState(false)

    const edi = () => {
        setEdit(!edit)
        setDelete(false)
    }

    const deli = () => {
        setDelete(!destroy)
        setEdit(false)
    }

    return (
        <div>
            <AccountEditButton edit={edi} />
            {edit? <AccountEdit />: null}

            <AccountDeleteButton destroy={deli}/>
            {destroy? <AccountDelete destroy={deli}/> : null}
        </div>
    )
}

export default AccountSettings
