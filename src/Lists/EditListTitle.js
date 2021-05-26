import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import updateList from '../redux/actions/Lists/selectedList/updateList'

const EditListTitle = ({toggle}) => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const update = () =>{
        const log = {
            title: name
        }
        dispatch(updateList(log))
        toggle()
    }

    return (
        <div>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="title" />
            <button onClick={()=>update()}>save</button>
            <button onClick={()=>toggle()}>X</button>
        </div>
    )
}

export default EditListTitle
