import React, {useState} from 'react'
import CreateGroupButton from './CreateGroupButton'
import CreateGroupForm from './CreateGroupForm'

const CreateGroup = () => {
    const [toggle, setToggle] = useState(false)

    const tog= ()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            { toggle?
                <CreateGroupForm toggle={tog}/>
                :
                <CreateGroupButton toggle={tog}/>
            }
        </div>
    )
}

export default CreateGroup
