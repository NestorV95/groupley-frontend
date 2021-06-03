import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import createGroup from '../../../redux/actions/groups/selectedGroup/createGroup'

const CreateGroupForm = () => {
    // const [image, setImage] = useState('')  
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const dispatch = useDispatch()

    const create = e => {
        e.preventDefault()
        const log = {
            name: name,
            code: code
        }
        dispatch(createGroup(log))
    }
    
    return (
        <form className="group-tile group-text create" > 
            <p className="create-title">Create a Group </p>
            {/* <input value={image} onChange={(e)=>setImage(e.target.value)} placeholder="image"/> <br/> */}
            <input className="group-text create-input" required type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/> <br/>
            <input className="group-text create-input"required type="text" value={code} onChange={(e)=>setCode(e.target.value)} placeholder="code"/> <br/>
            {/* <p > */}
                {/* <span className="create-span" > */}
                    <button className="group-text group-btn create-btn" onClick={e =>create(e)} >Create Group</button>
                {/* </span> */}
                {/* <span className="create-span" >
                    <button className="group-text group-btn create-btn"onClick={()=>toggle()}>X</button>
                </span> */}

            {/* </p> */}
            
            
        </form>
    )
}

export default CreateGroupForm
