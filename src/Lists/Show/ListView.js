import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa'
import deleteList from '../../redux/actions/Lists/selectedList/deleteList'
import ListItems from './ListItems'
import EditListTitle from '../EditListTitle'
import CreateList from '../Create/CreateList'

const ListView = () =>{
    const {selectedList} = useSelector( state => state.listsState)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)

    const togEdit = () => {
        setEdit(!edit)
    }

    const remove = () =>{
        dispatch(deleteList(selectedList))
        
    }
    return(
        <div className="win-view">
            < CreateList />
            {/* selectedList title */}
            {selectedList && <h3>{selectedList.title}</h3>}
            {selectedList && edit?
                <EditListTitle toggle={togEdit}/>
                :
                <FaPencilAlt  onClick={()=> togEdit()}/>
            }
            {selectedList && <FaTrashAlt  onClick={ () => remove() } /> }
            {/* scrollable selectedList of items */}
            {selectedList && <ListItems items={selectedList.List_items}/> }
        </div>
    )
}

export default ListView