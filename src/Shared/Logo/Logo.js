import React from 'react'
import logo from '../../Assets/Photos/logo.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo-div'>
            <img className='logo-img'src={logo} alt="logo"  />
        </div>
    )
}

export default Logo
