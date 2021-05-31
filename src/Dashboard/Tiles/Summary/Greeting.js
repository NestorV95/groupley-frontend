import React from 'react'
import {useSelector} from 'react-redux'

const Greeting = () => {
    const {currentUser} = useSelector(state => state.currentUserState)

    return (
        <p className="sum-greet">Hello {currentUser['first_name']},</p>
    )
}

export default Greeting
