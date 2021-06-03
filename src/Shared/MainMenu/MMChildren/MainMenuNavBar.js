//------------------------------------------- packages -------------------------------------------//
import React, {useState} from "react";
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
//------------------------------------------ components ------------------------------------------//

//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- sign up form -----------------------------------------//
const MainMenuNavBar = () => {
  const {groups} = useSelector(state => state.groupState)
  const [party, setParty] = useState(false)


  const toggleGroups = () => {
    setParty(!party)
  }
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
        <li className="mm-nli" onClick={ () => toggleGroups() }>
          <span className="mm-na">Groups</span>
        </li>
        { party  ? 
          <>
            {groups.length > 0? 
              groups.map(group =>{
                return (
                  <li className="mm-nli" >
                    <Link className="mm-na" key={group.id} to={`/groups/${group.code}`}>{group.name}</Link>
                  </li>
                )
              })
              :
              null
            }

            <li className="mm-nli" >
              <Link className="mm-na" to="/create-group">Create</Link>
            </li>
            <li className="mm-nli" >
              <Link className="mm-na" to="/create-search">Search</Link>
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
