import React from 'react'
import { useSelector } from 'react-redux'
import ListItems from './ListItems'

const ListView = () =>{
    const list = useSelector( state => state.selectedListState.selectedList)
    return(
        <div>
            {/* List title */}
            {list && <h3>{list.title}</h3>}
            {/* scrollable list of items */}
            {list && <ListItems items={list.list_items}/> }
        </div>
    )
}

export default ListView