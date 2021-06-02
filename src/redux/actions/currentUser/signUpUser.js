import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './fetchUser'
import { auth } from '../auth/authStatus'

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
        dispatch(fetchUserSuccess(data.user))
        localStorage.setItem('token', data.jwt)
        // if (data.jwt !== undefined){dispatch( auth( true ) )}
        data.jwt !== undefined? dispatch( auth( true ) ) : localStorage.clear()
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
        dispatch( dispatch( auth( false ) ) )
    })
}

export default signUpUser