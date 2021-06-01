import React from 'react'

import DeleteList from './DeleteList'
import EditTitle from '../Edit/EditTitle'

const ListTitle = ({list}) => {

    return (
        <div className="title-div" >
            <p className="list-text title-text">{list.title}</p>

            <div className="title-tools">
                <EditTitle list={list}/>
                <DeleteList list={list} />
            </div>
           
        </div>
    )
}

export default ListTitle
