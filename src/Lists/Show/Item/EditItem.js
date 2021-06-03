import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { FaUpload, FaTrashAlt, FaTimes } from "react-icons/fa";

import {editListItem} from '../../../redux/actions/ListItem/updateListItem'
import deleteListItem from "../../../redux/actions/ListItem/deleteListItem";

const EditItem = ({item , toggle }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(item.content);

  const handleUpdate = () => {
    const info = {
      ...item,
      content: input
    }
    dispatch( editListItem( info ) )
    toggle()
  };

  const handleDelete = () => {
    dispatch( deleteListItem( item ) )
  }

  return (
    <div>
      <p>
        <span>
          <textarea className="list-text list-tb" value={input} onChange={(e) => setInput(e.target.value)} />
        </span>
        <span>  
          <FaUpload className="list-icon" onClick={ () => handleUpdate() } />
        </span>
        <span>  
          <FaTrashAlt className="list-icon" onClick={ () => handleDelete() } />
        </span>
        <span>
          <FaTimes className="list-icon" onClick={ () => toggle() } />
        </span>
      </p>
    </div>
  );
};

export default EditItem;
