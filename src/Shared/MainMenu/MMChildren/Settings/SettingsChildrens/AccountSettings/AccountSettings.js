import React, { useState } from 'react'
import AccountDeleteButton from './AccountDelete/AccountDeleteButton'
import AccountDeleteForm from './AccountDelete/AccountDeleteForm'
import AccountEditButton from './AccountEdit/AccountEditButton'
import AccountEditForm from './AccountEdit/AccountEditForm'

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
            {/* edit button */}
            <AccountEditButton edit={edi} />
            {edit? <AccountEditForm />: null}
            {/* delete button */}
            <AccountDeleteButton destroy={deli}/>
            {destroy? <AccountDeleteForm /> : null}
        </div>
    )
}

export default AccountSettings
