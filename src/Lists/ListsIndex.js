import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import loadLists  from '../redux/actions/Lists/loadLists'
import ListIndexCard from './ListIndexCard'

const ListsIndex = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadLists())
        // eslint-disable-next-line
    },[])

    const lists = useSelector( state => state.listsState.lists )
    return(
        <ul>
            {/* scrollable list of lists */}
            {/* clicking a lists replaces displayed list*/}
            {lists && lists.map(list=>{
                return <ListIndexCard key={list.id} list={list}/>
            })}
        </ul>
    )
}


export default ListsIndex
