import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FaUpload} from "react-icons/fa";
import createListItem from "../../../redux/actions/ListItem/createListItem"

const CreateItem = () => {
    const {selectedList} = useSelector(state => state.listsState)
    const dispatch = useDispatch()
    const [input, setInput] = useState('');

    const handleCreate = () => {
        const info = {
            list: selectedList,
            item: { 
                list_id: selectedList.id,
                content: input
            }  
        }
        dispatch( createListItem( info ) )
    }

    return (
        <div div className="bot-foot">
            <p className="bot-p">
                <span>
                    <textarea 
                        className="list-text list-tb bot-tb" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                </span>
                <span>  
                    <FaUpload 
                        className="list-icon" 
                        onClick={ () => handleCreate() } 
                    />
                </span>
            </p>
        </div>
    )
}

export default CreateItem
