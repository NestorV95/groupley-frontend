import React,{useState} from 'react'
import CreateListButton from './CreateListButton'
import CreateListForm from './CreateListForm'

const CreateList = () => {

    const [create , setCreate] = useState(false)

    const toggle = () => {
        setCreate(!create)
    }

    return (
        <div>
            {create?
                <CreateListForm toggle={toggle}/>
                :
                <CreateListButton toggle={toggle}/>
            }
            
        </div>
    )
}

export default CreateList
