import React,{ useState } from 'react'

import EditItem from './EditItem.js'
import ItemContent from './ItemContent.js'

const ListItem = ({item})=>{
    const {content} = item
    const [edit, setEdit] = useState(false)

    const toggle = () => {
        // setEdit(!edit)
        console.log('toggle')
    }

    // console.log(item, content)

    return(
        <li className="bot-item">
            { edit ?
                <EditItem content={content} toggle={toggle} />
                :
                <ItemContent item={item} toggle={toggle} />
            }    
        </li>
    )
}

export default ListItem
