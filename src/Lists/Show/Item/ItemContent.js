import React from 'react' //,{useState} 
import {useDispatch} from 'react-redux'

import {editListItem} from '../../../redux/actions/ListItem/updateListItem'

const ItemContent = ({item, toggle}) => {
    const dispatch = useDispatch()
    const {content, completion} = item

    const handleCompletion = () =>{
        const info = {
            ...item,
            completion: !completion
        }
        dispatch( editListItem( info ) )
    }
    
  return (
    <div>
      <p>
        <span>
          <input
            className="checkbox"
            type="checkbox"
            name="completion"
            checked={completion}
            onChange={ e => handleCompletion()}
          />
        </span>
        <span
          className="task"
          style={completion ? { color: "#a7a7a8" } : null}
          onClick={() => toggle()}
        >
          {content}
        </span>
      </p>
    </div>
  );
};

export default ItemContent;
