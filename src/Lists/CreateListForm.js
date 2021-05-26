import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import saveList from '../redux/actions/Lists/selectedList/saveList'

const CreateListForm = ({toggle}) => {
    const {selectedGroup} = useSelector(state=> state.groupState)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const create=()=>{
        const log = {
            title: title,
            group_id: selectedGroup.id
        }
        dispatch(saveList(log))
    }
    return (
        <div>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}placeholder='title'/>
            <button onClick={()=>create()}>save</button>
            <button onClick={()=>toggle()}>X</button>
        </div>
    )
}

export default CreateListForm
