import React from 'react'
import {FaCog} from "react-icons/fa";

const SettingsButton = ({settings}) => {
    return (
        <FaCog onClick={()=>settings()}/>
    )
}

export default SettingsButton
