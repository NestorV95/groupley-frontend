import React from 'react'
import ListItem from './ListItem'

const ListItems = ({items})=>{
    return(
       <ul>
            {items && items.map(item=>{
               return <ListItem key={item.id} item={item} />
            })}
       </ul>
    )
}

export default ListItems
