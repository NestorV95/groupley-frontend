import React from 'react'

const CreateListButton = ({toggle}) => {

    return (
       <button className="list-text list-btn"onClick={()=>toggle()}>Create List</button>
    )

}

export default CreateListButton
