import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import updateList from '../../redux/actions/Lists/selectedList/updateList'

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
        <div className="tool-edit">
            <input className="list-text tool-input" value={name} onChange={e=>setName(e.target.value)} placeholder="title" />
            <button className="list-text list-btn" onClick={()=>update()}>save</button>
            <button className="list-text list-btn" onClick={()=>toggle()}>X</button>
        </div>
    )
}

export default EditListTitle