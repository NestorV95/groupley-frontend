import React from "react";
import { useSelector } from "react-redux";

import GroupUserTile from "./GroupUserTile";

const GroupUsersList = () => {
  const { users } = useSelector((state) => state.groupState.selectedGroup);

  return (
    <div className="group-tile users">
      {<p className="group-text users-count">{users.length} members</p>}

      <div className="users-outer">
        <ul className="users-inner">
          {users &&
            users.map((user) => {
              return <GroupUserTile key={user.username} user={user} />;
            })}
        </ul>
      </div>
    </div>
  );
};

// const gulOuter = {position: 'relative',display: 'table' ,margin: '0', padding: '0', height:'5rem', borderRadius: '1px solid red'}
// const gulinner = {display: 'block',  height: '7rem', width: '100%' ,
//     whiteSpace: 'nowrap', overflow: 'hidden', overflowX: 'auto', listStyleType: 'none'}

export default GroupUsersList;
