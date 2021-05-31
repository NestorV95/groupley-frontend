import React from 'react'
import {useSelector} from 'react-redux'

const CurrentGroup = () => {
    const {selectedGroup} = useSelector(state => state.groupState)

    return (
        <>
            {selectedGroup && <p className="sum-group">You cuurently have {selectedGroup.name} set as your selected group.</p>}
        </>
    )

}

export default CurrentGroup
