import React from 'react'
import {FaCog} from "react-icons/fa";

const SettingsButton = ({settings}) => {
    return (
        <FaCog className="mm-opt mm-icon"onClick={()=>settings()}/>
    )
}

export default SettingsButton
