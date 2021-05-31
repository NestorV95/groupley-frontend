import React from 'react'
import {useSelector} from 'react-redux'

const ListsSummary = () => {
    const {lists} = useSelector(state => state.listsState)
    return (
        <>
            {lists && <p>This group Currently has {lists.length} active lists.</p>}
        </>
        
    )
}

export default ListsSummary
