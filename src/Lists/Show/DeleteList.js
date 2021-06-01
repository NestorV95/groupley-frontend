import React from 'react'
import { useDispatch } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'

import deleteList from '../../redux/actions/Lists/selectedList/deleteList'

const DeleteList = ({list}) => {
    const dispatch = useDispatch()

    const remove = () =>{
        dispatch(deleteList(list)) 
    }

    return (
        <div className="tool-destroy">
            <FaTrashAlt className="list-icon list-trash" onClick={ () => remove() } />
        </div>
    )
}

export default DeleteList
