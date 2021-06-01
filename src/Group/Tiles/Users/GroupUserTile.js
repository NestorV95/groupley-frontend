import React from 'react'

const GroupUserTile = ({user}) => {
    return (
        <li className="user-card">
            
            <div className="card-img-d">

                <img className="card-img" src={user.image} alt={user.username}  />

            </div>

            <p className="group-text card-text">@{user.username}</p>
            
        </li>
    )
}

// const gutLi = {display: 'inline-block', margin: '0', padding: '0 .75rem'}
// const gutDiv = {display: 'inline-block', height: '2.5rem', width:'2.5rem'}
// const gutImg = {height: '100%', width:'100%',objectFit: 'cover', border: '1px solid black', borderRadius: '50%'}
// const gutP = {margin: '0', padding: '0', fontSize: '.8rem'}

export default GroupUserTile
