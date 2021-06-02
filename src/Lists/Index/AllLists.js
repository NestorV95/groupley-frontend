import React from 'react'
import { useSelector} from "react-redux";

import ListCard from "./ListCard";

const AllLists = () => {
    const {lists} = useSelector((state) => state.listsState);
    
    return (
      <div className="index-inner index-mid">
        <ul className="mid-inner">
          {lists &&
            lists.map((list) => {
              return <ListCard key={list.id} list={list} />;
            })
          }
        </ul>
      </div>
    )
}

export default AllLists
