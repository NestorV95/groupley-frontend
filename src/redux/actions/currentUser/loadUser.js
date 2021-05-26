import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './fetchUser'
import setGroups from '../groups/setGroups'

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
    .then(({user})=>{
        dispatch(fetchUserRequest())
        // console.log(user)
        const loadedUser = {
            id: user.id,
            image: user.image,
            email: user.email,
            username: user.username,
            first_name: user['first_name'],
            last_name: user['last_name'],
            groups: user['group_users']
        }
        const {groups} = user
        dispatch(setGroups(groups))

        dispatch(fetchUserSuccess(loadedUser))
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export default loadUser