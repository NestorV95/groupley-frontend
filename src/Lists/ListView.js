import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {FaPencilAlt} from 'react-icons/fa'
import ListItems from './ListItems'
import EditListTitle from './EditListTitle'

const ListView = () =>{
    const list = useSelector( state => state.listsState.selectedList)
    const [edit, setEdit] = useState(false)
    const toggle = () => {
        console.log('clicked')
        setEdit(!edit)
    }
    return(
        <div>
            {/* List title */}
            {list && <h3>{list.title}</h3>}
            {list && edit?
                <EditListTitle toggle={toggle}/>
                :
                <FaPencilAlt  onClick={()=> toggle()}/>
            }
            {/* scrollable list of items */}
            {list && <ListItems items={list.list_items}/> }
        </div>
    )
}

export default ListView