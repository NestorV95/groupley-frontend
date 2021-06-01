import React from "react"; //, { useEffect }
// import { useDispatch, useSelector} from "react-redux";

// import loadLists from "../../redux/actions/Lists/loadLists";

import AllLists from "./AllLists.js"

const ListsIndex = () => {

  return (
    <div className="win-index" >

      <div className="index-inner index-top index-border" >
        <p className="list-text list-top" >Listception</p>
      </div>

      <AllLists />

      <div className="index-inner index-bot" >
          <p className="list-text list-border" >Not a button</p>
      </div>

    </div>
  );
};

export default ListsIndex;
