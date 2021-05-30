
import { auth } from '../auth/authStatus'
import { fetchUserRequest , fetchUserSuccess , fetchUserFailure } from './fetchUser'

const logInUser = (log) => async (dispatch) => {
    dispatch(fetchUserRequest())
    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user:log})
    }
    await fetch('http://localhost:3000/api/v1/signin',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserSuccess(data.user))
        localStorage.setItem('token', data.jwt)
        if (data.jwt !== undefined){dispatch( auth( true ) )}
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
    
}

export default logInUser