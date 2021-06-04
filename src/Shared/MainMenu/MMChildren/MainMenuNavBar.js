//------------------------------------------- packages -------------------------------------------//
import React, {useEffect, useState} from "react";
import {useDispatch,  useSelector} from "react-redux" // 
import {Link,Redirect} from "react-router-dom"
import loadGroup from "../../../redux/actions/groups/selectedGroup/loadGroup";
//------------------------------------------ components ------------------------------------------//

//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- sign up form -----------------------------------------//
const MainMenuNavBar = () => {
  const {groups, selectedGroup, loading} = useSelector(state => state.groupState)
  const [party, setParty] = useState(false)
  const [select, setSelect] = useState(false)
  const [code, setCode] = useState('')
  const dispatch = useDispatch()
  
  const toggleGroups = () => {
    setParty(!party)
  }

  useEffect(()=>{
    if(selectedGroup.code === code && !loading){
      setSelect(true)
    }
  },[selectedGroup,code,loading])

  const handleSelect = group =>{
    setCode(group.code)
    dispatch(loadGroup(group))
  }


  return (
    <>
      { select? <Redirect to={`/groups/${selectedGroup.code}`}/> : null }
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
            <>
            { party  ? 
              <>
                {groups !== null && groups.length > 0? 
                  <>
                    {groups.map(group =>{ 
                      return ( 
                        <li className="mm-nli" >
                          <p className="mm-na" key={group.id} onClick={()=>handleSelect(group)}>{group.name}</p>
                        </li>)
                      }) 
                    }
                  </>
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
            </>
            <li className="mm-nli">
              <Link className="mm-na" to="/lists"> Lists </Link>
            </li>
            <li className="mm-nli">
              <Link className="mm-na" to="/budget"> Budget </Link>
            </li>
          </ul>
        </div>
    </>
  );
};

export default MainMenuNavBar;
