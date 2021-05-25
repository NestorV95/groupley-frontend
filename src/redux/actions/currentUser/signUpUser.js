import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './fetchUser'
import {authStatus} from '../auth/authStatus'

const signUpUser = (log) => async (dispatch)=>{
    dispatch(fetchUserRequest())
    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user:log})
    }
    fetch('http://localhost:3000/api/v1/signup',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(authStatus(true))
        localStorage.setItem('token', data.jwt)
        dispatch(fetchUserSuccess(data.user))
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export default signUpUser