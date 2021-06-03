import {fetchGroupRequest, fetchGroupSuccess, fetchGroupFailure} from './fetchGroup'
import joinGroup from './JoinGroup'

const createGroup = log => async (dispatch) => {
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
        
        dispatch(fetchGroupSuccess(group))
        dispatch(joinGroup(group))
    })

}

export default createGroup