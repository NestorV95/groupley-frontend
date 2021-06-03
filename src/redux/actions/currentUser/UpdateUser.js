import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from './fetchUser'

const UpdateUser = (log) => async (dispatch) =>{

    dispatch(fetchUserRequest())

    const req={
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({user: log})
    }
    
    fetch('http://localhost:3000/api/v1/update',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserSuccess(data.user))
        })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })

}

export default UpdateUser