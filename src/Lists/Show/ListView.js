import React from 'react'
import { useSelector } from 'react-redux'

import CreateList from '../Create/CreateList'
import ListTitle from './ListTitle'
import ListItems from './ListItems'
import CreateItem from './Item/CreateItem'

const ListView = () =>{ 
    const {selectedList} = useSelector( state => state.listsState)
  
    return(
        <div className="win-view">

            <div className="view-top">
               { selectedList === null ? 
                    < CreateList />
                    : 
                    <ListTitle list={selectedList}/>
                } 
            </div>

            <div className="view-bot">
                {selectedList !== null ?
                    <>
                        <ListItems items={selectedList['list_items']}/> 
                        <CreateItem />
                    </>
                    : 
                    null 
                }
            </div>
        
        </div>
    )
}

export default ListView