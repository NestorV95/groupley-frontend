import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './fetchUser'
import setGroups from '../groups/setGroups'
import loadGroup from '../groups/selectedGroup/loadGroup'

const loadUser = () => async (dispatch) => {
    dispatch(fetchUserRequest())
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
        
        if(groups.length > 0){
            const group = groups[0]
            dispatch( loadGroup( group ) )
        }

        dispatch(fetchUserSuccess(loadedUser))
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export default loadUser