//------------------------------------------- packages -------------------------------------------//
import React, {useState} from "react";
import { useSelector} from "react-redux" // useDispatch, 
import {Link} from "react-router-dom"
// import loadGroup from "../../../redux/actions/groups/selectedGroup/loadGroup";
//------------------------------------------ components ------------------------------------------//

//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- sign up form -----------------------------------------//
const MainMenuNavBar = () => {
  const {groups, selectedGroup} = useSelector(state => state.groupState)
  // const dispatch = useDispatch()
  const [party, setParty] = useState(false)


  const toggleGroups = () => {
    setParty(!party)
  }

  // const getGroup = group => {
  //   dispatch(loadGroup(group))
  // }

  return (
    <div className="mm-nav">
      <ul className="mm-nul">
        <li className="mm-nli">
          <Link className="mm-na" to="/dashboard"> Dashboard </Link>
        </li>
        {/* <li className="mm-nli">
          <Link className="mm-na" to="/calander"> Calander </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/messages"> Messages </Link>
        </li> */}
        <li className="mm-nli" onClick={ () => toggleGroups() } style={party? { boxShadow: 'inset 0 0 10px #9e9ed14d'}: null}>
          <span className="mm-na">Groups</span>
        </li>
        { party  ? 
          <>
            {groups.length > 0? 
              <li className="mm-nli" >
                <Link className="mm-na" to={`/groups/${selectedGroup.code}`}>{selectedGroup.name}</Link>
              </li>
              :
              null
            }

            <li className="mm-nli" >
              <Link className="mm-na" to="/create-group">Create</Link>
            </li>
            <li className="mm-nli" >
              <Link className="mm-na" to="/search-group">Search</Link>
            </li>

          </>  
          :
          null  
        }
        <li className="mm-nli">
          <Link className="mm-na" to="/lists"> Lists </Link>
        </li>
        {/* <li className="mm-nli">
          <Link className="mm-na" to="/budget"> Budget </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/dashboard"> Dashboard </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/calander"> Calander </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/messages"> Messages </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/groups"> Groups </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/lists"> Lists </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/budget"> Budget </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/dashboard"> Dashboard </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/calander"> Calander </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/messages"> Messages </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/groups"> Groups </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/lists"> Lists </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/budget"> Budget </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/dashboard"> Dashboard </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/calander"> Calander </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/messages"> Messages </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/groups"> Groups </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/lists"> Lists </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/budget"> Budget </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default MainMenuNavBar;
