import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './fetchUser'
import loggedStatus from '../auth/loggedStatus'

const signUpUser = (log) => (dispatch)=>{
    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user:log})
    }
    fetch('http://localhost:3000/api/v1/signup',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserRequest())
        dispatch(fetchUserSuccess(data.user))
        dispatch(loggedStatus(true))
        localStorage.setItem('token', data.jwt)
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export default signUpUser