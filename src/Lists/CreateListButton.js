import React from 'react'

const CreateListButton = ({toggle}) => {

    return (
       <button onClick={()=>toggle()}>Create List</button>
    )

}

export default CreateListButton
