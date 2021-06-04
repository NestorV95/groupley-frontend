import {fetchGroupRequest, fetchGroupSuccess, fetchGroupFailure} from './fetchGroup'
import joinGroup from './JoinGroup'
import addAllGroups from '../addAllGroups'

const createGroup = log => async (dispatch,getState) => {
    const {currentUser} = getState().currentUserState
    dispatch(fetchGroupRequest())

    const req={
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(log)
    }


    await fetch('http://localhost:3000/api/v1/groups', req )
    .then(res=>res.json())
    .then(({group})=>{
        const newGroup = {
            ...group,
            users:[currentUser]
        }
        dispatch(fetchGroupSuccess(newGroup))
        dispatch(joinGroup(newGroup))
        dispatch(addAllGroups(newGroup))
    })
    .catch(error=>{
        dispatch(fetchGroupFailure(error.message))
    })

}

export default createGroup