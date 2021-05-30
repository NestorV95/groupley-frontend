import React from 'react'
import {FaBell} from "react-icons/fa";

const NotificationsButton = ({notifications}) => {
    return (
        // opens notifications container
        <FaBell className="mm-opt mm-icon" onClick={()=>notifications()} />
    )
}

export default NotificationsButton