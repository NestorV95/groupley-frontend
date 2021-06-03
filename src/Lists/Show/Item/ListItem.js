import React,{ useState } from 'react'

import EditItem from './EditItem.js'
import ItemContent from './ItemContent.js'

const ListItem = ({item})=>{
    const [edit, setEdit] = useState(false)

    const toggle = () => {
        setEdit(!edit)
    }

    return(
        <li className="bot-item">
            { edit ?
                <EditItem item={item} toggle={toggle} />
                :
                <ItemContent  item={item} toggle={toggle} />
            }    
        </li>
    )
}

export default ListItem
