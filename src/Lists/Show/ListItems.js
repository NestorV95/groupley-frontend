import React from 'react'
import ListItem from './Item/ListItem'

const ListItems = ({items})=>{
    return(
       <ul className="list-text bot-items">
            {items && items.map(item=>{
               return <ListItem key={item.id} item={item} />
            })}
       </ul>
    )
}

export default ListItems
