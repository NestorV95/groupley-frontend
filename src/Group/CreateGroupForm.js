import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import createGroup from '../redux/actions/groups/selectedGroup/createGroup'

const CreateGroupForm = ({toggle}) => {
    const [image, setImage] = useState('')  
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const dispatch = useDispatch()

    const create = () => {
        const log = {
            image: image,
            name: name,
            code: code
        }
        dispatch(createGroup(log))
    }
    
    return (
        <div>
            <input value={image} onChange={(e)=>setImage(e.target.value)} placeholder="image"/> <br/>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/> <br/>
            <input value={code} onChange={(e)=>setCode(e.target.value)} placeholder="code"/> <br/>
            <button onClick={()=>create()} >Create Group</button>
            <button onClick={()=>toggle()}>X</button>
        </div>
    )
}

export default CreateGroupForm
