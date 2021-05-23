import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './fetchUser'

const loadUser = () => async (dispatch) => {
    const req={
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }
    await fetch('http://localhost:3000/api/v1/loggedin',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserRequest())
        dispatch(fetchUserSuccess(data.user))
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export default loadUser