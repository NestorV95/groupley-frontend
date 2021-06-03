import React,{ useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router'
import createGroup from '../../../redux/actions/groups/selectedGroup/createGroup'

const CreateGroupForm = () => {
    const {selectedGroup} = useSelector(state => state.groupState)
    const [success, setSuccess] = useState(false)
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        if(selectedGroup.code === code){
            setSuccess(true)
        }
    },[selectedGroup,code])

    const create = e => {
        e.preventDefault()
        const log = {
            name: name,
            code: code
        }
        dispatch(createGroup(log))
        
    }
    
    return (
        <>
            {   success?
                <Redirect to={`/groups/${selectedGroup.code}`}/>
                :
                <form className="group-tile group-text create" > 
                    <p className="create-title">Create a Group </p>
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
            }
        </>
    )
}

export default CreateGroupForm
