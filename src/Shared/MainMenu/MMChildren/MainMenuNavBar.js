//------------------------------------------- packages -------------------------------------------//
import React from "react";
import {Link} from "react-router-dom"
//------------------------------------------ components ------------------------------------------//

//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- sign up form -----------------------------------------//
const MainMenuNavBar = () => {
  return (
    <div className="mm-nav">
      <ul className="mm-nul">
        <li className="mm-nli">
          <Link className="mm-na" to="/dashboard"> Dashboard </Link>
        </li>
        <li className="mm-nli">
          <Link className="mm-na" to="/calander"> Calander </Link>
        </li>
        {/* <li className="mm-nli">
          <Link className="mm-na" to="/messages"> Messages </Link>
        </li> */}
        <li className="mm-nli">
          <Link className="mm-na" to="/lists"> Lists </Link>
        </li>
        {/* <li className="mm-nli">
          <Link className="mm-na" to="/budget"> Budget </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default MainMenuNavBar;
