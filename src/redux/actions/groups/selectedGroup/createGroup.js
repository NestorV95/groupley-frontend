import {fetchGroupRequest, fetchGroupSuccess, fetchGroupFailure} from './fetchGroup'

const createGroup = log => async (dispatch, getState) => {

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
        dispatch(fetchGroupRequest())
        dispatch(fetchGroupSuccess(group))
    })
    .catch(error=>{
        dispatch(fetchGroupFailure(error.message))
    })
}

export default createGroup