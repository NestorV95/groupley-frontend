import React from 'react'

const CreateGroupButton = ({toggle}) => {
    const tog = () => {
        toggle()
    }

    return (
        <button onClick={()=>tog()}>Create Group</button>
    )
}

export default CreateGroupButton
