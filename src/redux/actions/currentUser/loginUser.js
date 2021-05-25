// import {authStatus} from '../auth/authStatus'
import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './fetchUser'

const logInUser = (log) => async (dispatch) => {
    dispatch(fetchUserRequest())
    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user:log})
    }
    fetch('http://localhost:3000/api/v1/signin',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserSuccess(data.user))
        localStorage.setItem('token', data.jwt)
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export default logInUser